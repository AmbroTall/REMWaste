import { Truck, MapPin, Star, Menu, X } from "lucide-react"; // Importing icons from lucide-react

// Define the props for the Header component
interface HeaderProps {
  mobileMenuOpen: boolean; // State to track if mobile menu is open
  setMobileMenuOpen: (open: boolean) => void; // Function to toggle mobile menu
}

// Header component definition
const Header: React.FC<HeaderProps> = ({
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  return (
    <header className="relative z-10 bg-white/10 backdrop-blur-md border-b border-white/20">
      {/* Container for header content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo and title section */}
          <div className="flex items-center space-x-3">
            {/* Logo icon with gradient background */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-2.5 shadow-lg">
              <Truck className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
            </div>
            {/* Title and subtitle */}
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-white">
                We Want Waste
              </h1>
              <p className="text-xs sm:text-sm text-purple-200 hidden sm:block">
                Professional Skip Hire
              </p>
            </div>
          </div>
          {/* Desktop info section */}
          <div className="hidden sm:flex items-center space-x-6">
            {/* Location info */}
            <div className="flex items-center space-x-2 text-purple-200">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">NR32 Lowestoft</span>
            </div>
            {/* Star rating */}
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 text-yellow-400 fill-current"
                />
              ))}
              <span className="text-white text-sm ml-2">4.9/5</span>
            </div>
          </div>
          {/* Mobile menu button */}
          <button
            className="sm:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"} // Accessibility label
            type="button" // Explicit button type
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white/10 backdrop-blur-md border-t border-white/20">
          <div className="px-4 py-4 space-y-2">
            {/* Location info for mobile */}
            <div className="flex items-center space-x-2 text-purple-200 py-2">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">NR32 Lowestoft</span>
            </div>
            {/* Star rating for mobile */}
            <div className="flex items-center space-x-1 py-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 text-yellow-400 fill-current"
                />
              ))}
              <span className="text-white text-sm ml-2">4.9/5 Rating</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
