import React from "react";
import { CheckCircle, AlertTriangle } from "lucide-react";
import { Skip, SkipDetails } from "../types/skip";

interface SkipCardProps {
  skip: Skip;
  selectedSkip: Skip | null;
  setSelectedSkip: (skip: Skip) => void;
  hoveredSkip: number | null;
  setHoveredSkip: (id: number | null) => void;
  calculateTotalPrice: (priceBeforeVat: number, vat: number) => number;
  getSkipDetails: (size: number) => SkipDetails;
}

const SkipCard: React.FC<SkipCardProps> = ({
  skip,
  selectedSkip,
  setSelectedSkip,
  hoveredSkip,
  setHoveredSkip,
  calculateTotalPrice,
  getSkipDetails,
}) => {
  const totalPrice = calculateTotalPrice(skip.price_before_vat, skip.vat);
  const isSelected = selectedSkip?.id === skip.id;
  const isHovered = hoveredSkip === skip.id;
  const skipDetails = getSkipDetails(skip.size);

  return (
    <div
      className={`relative group cursor-pointer transition-all duration-500 transform ${
        isHovered ? "scale-105" : "hover:scale-102"
      } ${isSelected ? "scale-105" : ""}`}
      onClick={() => setSelectedSkip(skip)}
      onMouseEnter={() => setHoveredSkip(skip.id)}
      onMouseLeave={() => setHoveredSkip(null)}
    >
      <div
        className={`absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur transition-all duration-500 ${
          isSelected || isHovered
            ? "opacity-75"
            : "opacity-0 group-hover:opacity-50"
        }`}
      ></div>
      <div
        className={`relative bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border transition-all duration-300 ${
          isSelected
            ? "border-purple-400 shadow-2xl shadow-purple-500/25"
            : "border-white/20 hover:border-white/40"
        }`}
      >
        {/* Full-width badge bar */}
        <div className="absolute top-3 left-0 w-full flex justify-between px-4">
          {skip.allowed_on_road && (
            <span className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg">
              Road Allowed
            </span>
          )}
          {skip.allows_heavy_waste && (
            <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg">
              Heavy Waste
            </span>
          )}
          {/* Placeholder to balance space if only one badge */}
          {!skip.allowed_on_road && !skip.allows_heavy_waste && (
            <span className="w-0"></span>
          )}
          {!skip.allowed_on_road && skip.allows_heavy_waste && (
            <span className="w-1/2"></span>
          )}
          {skip.allowed_on_road && !skip.allows_heavy_waste && (
            <span className="w-1/2"></span>
          )}
        </div>
        <div className="text-center mb-4 sm:mb-6 pt-6">
          {" "}
          {/* Increased pt-6 to account for badge bar */}
          <div
            className={`bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-xl p-3 sm:p-4 mb-3 mx-auto w-fit transition-all duration-300 ${
              isHovered ? "shadow-lg shadow-purple-500/30" : ""
            }`}
          >
            <h3 className="text-xl sm:text-2xl font-bold">{skip.size}</h3>
            <p className="text-xs sm:text-sm text-purple-100">Yard Skip</p>
          </div>
          <p className="text-purple-200 text-xs sm:text-sm font-medium mb-1">
            {skipDetails.desc}
          </p>
          <p className="text-purple-300 text-xs">
            Capacity: {skipDetails.capacity}
          </p>
        </div>
        <div className="text-center mb-4 sm:mb-6">
          <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
            £{totalPrice}
          </div>
          <div className="text-xs sm:text-sm text-purple-200">
            {skip.hire_period_days} Days
          </div>
          <div className="text-xs sm:text-sm text-purple-200">
            VAT: {skip.vat}%
          </div>
        </div>
        <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <span className="text-purple-200">Road Placement</span>
            <span
              className={`flex items-center font-medium ${
                skip.allowed_on_road ? "text-green-400" : "text-red-400"
              }`}
            >
              {skip.allowed_on_road ? (
                <>
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                  Yes
                </>
              ) : (
                <>
                  <AlertTriangle className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                  No
                </>
              )}
            </span>
          </div>
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <span className="text-purple-200">Heavy Materials</span>
            <span
              className={`flex items-center font-medium ${
                skip.allows_heavy_waste ? "text-green-400" : "text-red-400"
              }`}
            >
              {skip.allows_heavy_waste ? (
                <>
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                  Allowed
                </>
              ) : (
                <>
                  <AlertTriangle className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                  Limited
                </>
              )}
            </span>
          </div>
        </div>
        <div className="mb-4 sm:mb-6">
          {" "}
          {/* Added margin-bottom container for spacing */}
          <button
            className={`w-full py-2.5 sm:py-3 px-4 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
              isSelected
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30"
                : "bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm cursor-pointer"
            }`}
          >
            {isSelected ? "✓ Selected" : "Select Skip"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkipCard;
