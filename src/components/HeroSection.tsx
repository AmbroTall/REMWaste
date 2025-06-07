import { Shield, Zap, Clock } from "lucide-react"; // Importing icon components

// HeroSection component displays the main hero area of the page
const HeroSection: React.FC = () => {
  return (
    <div className="text-center mb-8 sm:mb-12">
      {/* Main heading with gradient highlight on "Skip" */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
        Choose Your Perfect
        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          {" "}
          Skip
        </span>
      </h2>
      {/* Subheading describing the service */}
      <p className="text-lg sm:text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
        Professional skip hire made simple. All prices include VAT, delivery,
        and collection.
      </p>
      {/* Feature icons and descriptions */}
      <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 mt-6 sm:mt-8">
        {/* Fully Licensed feature */}
        <div className="flex items-center space-x-2 text-purple-200">
          <Shield className="h-5 w-5 text-green-400" />
          <span className="text-sm sm:text-base">Fully Licensed</span>
        </div>
        {/* Same Day Delivery feature */}
        <div className="flex items-center space-x-2 text-purple-200">
          <Zap className="h-5 w-5 text-yellow-400" />
          <span className="text-sm sm:text-base">Same Day Delivery</span>
        </div>
        {/* Flexible Hire Periods feature */}
        <div className="flex items-center space-x-2 text-purple-200">
          <Clock className="h-5 w-5 text-blue-400" />
          <span className="text-sm sm:text-base">Flexible Hire Periods</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; // Exporting the component for use elsewhere
