/**
 * Retry mechanism for API calls with exponential backoff
 */

export interface RetryOptions {
  maxRetries?: number;
  initialDelay?: number;
  maxDelay?: number;
  backoffMultiplier?: number;
  retryableStatuses?: number[];
}

const DEFAULT_OPTIONS: Required<RetryOptions> = {
  maxRetries: 3,
  initialDelay: 1000, // 1 second
  maxDelay: 10000, // 10 seconds
  backoffMultiplier: 2,
  retryableStatuses: [408, 429, 500, 502, 503, 504],
};

/**
 * Delays execution for a specified amount of time
 */
function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Calculates the delay for the next retry using exponential backoff
 */
function calculateDelay(
  attempt: number,
  initialDelay: number,
  maxDelay: number,
  backoffMultiplier: number
): number {
  const exponentialDelay = initialDelay * Math.pow(backoffMultiplier, attempt);
  // Add jitter to prevent thundering herd
  const jitter = Math.random() * 0.3 * exponentialDelay;
  return Math.min(exponentialDelay + jitter, maxDelay);
}

/**
 * Fetches data with automatic retry on failure
 *
 * @param url - The URL to fetch
 * @param options - Fetch options
 * @param retryOptions - Retry configuration
 * @returns Promise resolving to the fetch Response
 *
 * @example
 * ```ts
 * const response = await fetchWithRetry('/api/data', {
 *   method: 'POST',
 *   body: JSON.stringify({ key: 'value' }),
 * }, {
 *   maxRetries: 3,
 *   initialDelay: 1000,
 * });
 * const data = await response.json();
 * ```
 */
export async function fetchWithRetry(
  url: string,
  options?: RequestInit,
  retryOptions?: RetryOptions
): Promise<Response> {
  const config = { ...DEFAULT_OPTIONS, ...retryOptions };
  let lastError: Error | null = null;

  for (let attempt = 0; attempt <= config.maxRetries; attempt++) {
    try {
      const response = await fetch(url, options);

      // If response is successful or not retryable, return it
      if (response.ok || !config.retryableStatuses.includes(response.status)) {
        return response;
      }

      // Store the error response
      lastError = new Error(`HTTP ${response.status}: ${response.statusText}`);

      // Don't retry on last attempt
      if (attempt === config.maxRetries) {
        break;
      }

      // Calculate delay for next retry
      const delayMs = calculateDelay(
        attempt,
        config.initialDelay,
        config.maxDelay,
        config.backoffMultiplier
      );

      console.warn(
        `Request failed with status ${
          response.status
        }. Retrying in ${delayMs}ms... (Attempt ${attempt + 1}/${
          config.maxRetries
        })`
      );

      await delay(delayMs);
    } catch (error) {
      lastError =
        error instanceof Error ? error : new Error("Unknown error occurred");

      // Don't retry on last attempt
      if (attempt === config.maxRetries) {
        break;
      }

      // Calculate delay for next retry
      const delayMs = calculateDelay(
        attempt,
        config.initialDelay,
        config.maxDelay,
        config.backoffMultiplier
      );

      console.warn(
        `Request failed with error: ${
          lastError.message
        }. Retrying in ${delayMs}ms... (Attempt ${attempt + 1}/${
          config.maxRetries
        })`
      );

      await delay(delayMs);
    }
  }

  // All retries exhausted
  throw new Error(
    `Request failed after ${config.maxRetries} retries: ${
      lastError?.message || "Unknown error"
    }`
  );
}

/**
 * Convenience function for JSON API calls with retry
 */
export async function fetchJsonWithRetry<T = any>(
  url: string,
  options?: RequestInit,
  retryOptions?: RetryOptions
): Promise<T> {
  const response = await fetchWithRetry(url, options, retryOptions);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.error || `HTTP ${response.status}: ${response.statusText}`
    );
  }

  return response.json();
}
