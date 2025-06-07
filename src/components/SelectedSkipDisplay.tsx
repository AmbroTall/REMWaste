import { Skip } from "../types/skip";

// Define the props for the SelectedSkipDisplay component
interface SelectedSkipDisplayProps {
  selectedSkip: Skip | null; // Currently selected skip, or null if none
  skips: Skip[]; // List of all skips (not used in this component)
  calculateTotalPrice: (priceBeforeVat: number, vat: number) => number; // Function to calculate total price
  setCurrentStep: (step: number | ((prev: number) => number)) => void; // Function to update the current step
}

// Functional component for displaying the selected skip summary and navigation
const SelectedSkipDisplay: React.FC<SelectedSkipDisplayProps> = ({
  selectedSkip,
  calculateTotalPrice,
  setCurrentStep,
}) => {
  // If no skip is selected, render nothing
  if (!selectedSkip) return null;

  // Calculate the total price using the provided function
  const totalPrice = calculateTotalPrice(
    selectedSkip.price_before_vat,
    selectedSkip.vat
  );

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left py-2">
      {/* Selected Skip Summary */}
      <div className="flex items-center space-x-4 text-white">
        {/* Display skip size */}
        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text font-bold text-xl sm:text-2xl">
          {selectedSkip.size} Yard Skip
        </span>
        {/* Display total price */}
        <span className="text-lg sm:text-xl font-semibold">£{totalPrice}</span>
        {/* Indicate this skip is selected */}
        <span className="bg-green-500 text-white text-sm px-2 py-1 rounded-full">
          Selected
        </span>
        {/* Show warning if skip is not allowed on road */}
        {!selectedSkip.allowed_on_road && (
          <span className="text-red-400 text-sm font-medium">
            Not Road Allowed
          </span>
        )}
      </div>
      {/* Navigation Buttons */}
      <div className="flex space-x-4 mt-2 sm:mt-0">
        {/* Back button: go to previous step if possible */}
        <button
          className="px-4 py-2 bg-white/20 text-white rounded-xl hover:bg-white/30 text-sm"
          onClick={() =>
            setCurrentStep((prev: number) => (prev > 1 ? prev - 1 : prev))
          }
          type="button"
        >
          Back
        </button>
        {/* Continue button: go to step 3 */}
        <button
          onClick={() => setCurrentStep(3)}
          className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 text-sm"
          type="button"
        >
          Continue →
        </button>
      </div>
    </div>
  );
};

export default SelectedSkipDisplay;
