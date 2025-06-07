import React from "react";

// LoadingSpinner component displays a centered animated spinner with loading text
const LoadingSpinner: React.FC = () => {
  return (
    // Full-screen container with gradient background and centered content
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          {/* Outer spinner: white top and right borders, spinning clockwise */}
          <div className="animate-spin rounded-full h-20 w-20 border-4 border-transparent border-t-white border-r-white mx-auto mb-6"></div>
          {/* Inner spinner: purple bottom and left borders, spinning counterclockwise */}
          <div
            className="absolute inset-0 rounded-full h-20 w-20 border-4 border-transparent border-b-purple-300 border-l-purple-300 animate-spin"
            style={{ animationDirection: "reverse", animationDuration: "1s" }}
          ></div>
        </div>
        {/* Loading title */}
        <h3 className="text-white text-xl font-semibold mb-2">
          Loading Your Options
        </h3>
        {/* Loading description */}
        <p className="text-purple-200">
          Finding the perfect skip sizes for your area...
        </p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
