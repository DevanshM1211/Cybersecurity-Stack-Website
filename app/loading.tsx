export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-950 to-gray-900 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="relative mb-8">
          <div className="w-20 h-20 mx-auto border-4 border-cyber-blue/30 border-t-cyber-blue rounded-full animate-spin" />
          <div className="absolute inset-0 w-20 h-20 mx-auto border-4 border-transparent border-t-cyber-purple rounded-full animate-spin animation-delay-150" 
            style={{ animationDirection: 'reverse', animationDuration: '1s' }} 
          />
        </div>
        
        {/* Loading Text */}
        <h2 className="text-2xl font-bold text-white mb-2 animate-pulse">
          Loading Cyber Security Stack
        </h2>
        <p className="text-gray-400 animate-pulse">
          Initializing secure protocol...
        </p>
      </div>
    </div>
  );
}
