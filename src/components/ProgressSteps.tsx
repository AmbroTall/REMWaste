import { CheckCircle } from "lucide-react";
import { Step } from "../types/skip";

interface ProgressStepsProps {
  steps: Step[]; // Array of step objects to render
  currentStep: number; // The current active step number
}

// Functional component for rendering progress steps
const ProgressSteps: React.FC<ProgressStepsProps> = ({
  steps,
  currentStep,
}) => {
  return (
    // Container with background blur and border
    <div className="relative z-10 bg-white/5 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        {/* Steps row, horizontally scrollable on overflow */}
        <div className="flex items-center justify-between space-x-2 sm:space-x-4 overflow-x-auto pb-2">
          {steps.map((step, index) => {
            // Determine if this step is the current one
            const isCurrent = step.number === currentStep;
            return (
              <div
                key={step.number}
                className="flex items-center min-w-0 flex-1"
              >
                {/* Step icon and title */}
                <div className="flex flex-col sm:flex-row items-center">
                  {/* Step icon with conditional styling */}
                  <div
                    className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 transition-all duration-300 ${
                      step.completed
                        ? "bg-green-500 border-green-500 text-white shadow-lg shadow-green-500/30"
                        : isCurrent
                        ? "bg-gradient-to-br from-purple-500 to-pink-500 border-transparent text-white shadow-lg shadow-purple-500/30"
                        : "bg-white/10 border-white/30 text-white/60"
                    }`}
                  >
                    {/* Show check icon if completed, else step icon */}
                    {step.completed ? (
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                    ) : (
                      <step.icon className="h-3 w-3 sm:h-4 sm:w-4" />
                    )}
                  </div>
                  {/* Step title */}
                  <div className="mt-1 sm:mt-0 sm:ml-3 text-center sm:text-left">
                    <p
                      className={`text-xs sm:text-sm font-medium ${
                        isCurrent
                          ? "text-white"
                          : step.completed
                          ? "text-green-300"
                          : "text-white/60"
                      }`}
                    >
                      {step.title}
                    </p>
                  </div>
                </div>
                {/* Connector line between steps, except after last step */}
                {index < steps.length - 1 && (
                  <div
                    className={`hidden sm:block ml-4 flex-1 h-0.5 transition-all duration-300 ${
                      step.completed ? "bg-green-400" : "bg-white/20"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProgressSteps;
