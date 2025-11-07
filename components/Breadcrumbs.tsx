"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import Script from "next/script";

const Breadcrumbs = () => {
  const pathname = usePathname();

  // Don't show breadcrumbs on homepage
  if (pathname === "/") return null;

  const pathSegments = pathname.split("/").filter((segment) => segment);

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    ...pathSegments.map((segment, index) => {
      const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
      const name = segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      return { name, path };
    }),
  ];

  // Generate BreadcrumbList structured data
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://cybersecuritystack.co.uk${item.path}`,
    })),
  };

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <nav
        aria-label="Breadcrumb"
        className="container mx-auto px-6 pt-24 pb-4 relative z-10"
      >
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;

            return (
              <li key={item.path} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 text-gray-500 mx-2" />
                )}
                {isLast ? (
                  <span className="text-cyber-blue font-medium flex items-center">
                    {index === 0 && <Home className="w-4 h-4 mr-1" />}
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.path}
                    className="text-gray-400 hover:text-cyber-blue transition-colors flex items-center"
                  >
                    {index === 0 && <Home className="w-4 h-4 mr-1" />}
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
