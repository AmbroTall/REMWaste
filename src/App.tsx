import React, { useState, useEffect } from "react";
import ProgressSteps from "./components/ProgressSteps";
import HeroSection from "./components/HeroSection";
import SkipCard from "./components/SkipCard";
import SelectedSkipDisplay from "./components/SelectedSkipDisplay";
import LoadingSpinner from "./components/LoadingSpinner";
import { Skip, Step } from "./types/skip";
import {
  MapPin,
  Truck,
  CheckCircle,
  AlertTriangle,
  Calendar,
  CreditCard,
} from "lucide-react";

const SkipHireApp: React.FC = () => {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentStep, setCurrentStep] = useState<number>(3);
  const [hoveredSkip, setHoveredSkip] = useState<number | null>(null);

  const skipData: Skip[] = [
    {
      id: 17933,
      size: 4,
      hire_period_days: 14,
      transport_cost: null,
      per_tonne_cost: null,
      price_before_vat: 278,
      vat: 20,
      postcode: "NR32",
      area: "",
      forbidden: false,
      created_at: "2025-04-03T13:51:46.897146",
      updated_at: "2025-04-07T13:16:52.813",
      allowed_on_road: true,
      allows_heavy_waste: true,
    },
    {
      id: 17934,
      size: 6,
      hire_period_days: 14,
      transport_cost: null,
      per_tonne_cost: null,
      price_before_vat: 305,
      vat: 20,
      postcode: "NR32",
      area: "",
      forbidden: false,
      created_at: "2025-04-03T13:51:46.897146",
      updated_at: "2025-04-07T13:16:52.992",
      allowed_on_road: true,
      allows_heavy_waste: true,
    },
    {
      id: 17935,
      size: 8,
      hire_period_days: 14,
      transport_cost: null,
      per_tonne_cost: null,
      price_before_vat: 375,
      vat: 20,
      postcode: "NR32",
      area: "",
      forbidden: false,
      created_at: "2025-04-03T13:51:46.897146",
      updated_at: "2025-04-07T13:16:53.171",
      allowed_on_road: true,
      allows_heavy_waste: true,
    },
    {
      id: 17936,
      size: 10,
      hire_period_days: 14,
      transport_cost: null,
      per_tonne_cost: null,
      price_before_vat: 400,
      vat: 20,
      postcode: "NR32",
      area: "",
      forbidden: false,
      created_at: "2025-04-03T13:51:46.897146",
      updated_at: "2025-04-07T13:16:53.339",
      allowed_on_road: false,
      allows_heavy_waste: false,
    },
    {
      id: 17937,
      size: 12,
      hire_period_days: 14,
      transport_cost: null,
      per_tonne_cost: null,
      price_before_vat: 439,
      vat: 20,
      postcode: "NR32",
      area: "",
      forbidden: false,
      created_at: "2025-04-03T13:51:46.897146",
      updated_at: "2025-04-07T13:16:53.516",
      allowed_on_road: false,
      allows_heavy_waste: false,
    },
    {
      id: 17938,
      size: 14,
      hire_period_days: 14,
      transport_cost: null,
      per_tonne_cost: null,
      price_before_vat: 470,
      vat: 20,
      postcode: "NR32",
      area: "",
      forbidden: false,
      created_at: "2025-04-03T13:51:46.897146",
      updated_at: "2025-04-07T13:16:53.69",
      allowed_on_road: false,
      allows_heavy_waste: false,
    },
    {
      id: 17939,
      size: 16,
      hire_period_days: 14,
      transport_cost: null,
      per_tonne_cost: null,
      price_before_vat: 496,
      vat: 20,
      postcode: "NR32",
      area: "",
      forbidden: false,
      created_at: "2025-04-03T13:51:46.897146",
      updated_at: "2025-04-07T13:16:53.876",
      allowed_on_road: false,
      allows_heavy_waste: false,
    },
    {
      id: 15124,
      size: 20,
      hire_period_days: 14,
      transport_cost: 248,
      per_tonne_cost: 248,
      price_before_vat: 992,
      vat: 20,
      postcode: "NR32",
      area: "",
      forbidden: false,
      created_at: "2025-04-03T13:51:40.344435",
      updated_at: "2025-04-07T13:16:52.434",
      allowed_on_road: false,
      allows_heavy_waste: true,
    },
    {
      id: 15125,
      size: 40,
      hire_period_days: 14,
      transport_cost: 248,
      per_tonne_cost: 248,
      price_before_vat: 992,
      vat: 20,
      postcode: "NR32",
      area: "",
      forbidden: false,
      created_at: "2025-04-03T13:51:40.344435",
      updated_at: "2025-04-07T13:16:52.603",
      allowed_on_road: false,
      allows_heavy_waste: false,
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setSkips(skipData);
      setLoading(false);
    }, 1200);
  }, []);

  const calculateTotalPrice = (priceBeforeVat: number, vat: number): number => {
    return Math.round(priceBeforeVat * (1 + vat / 100));
  };

  const getSkipDetails = (
    size: number
  ): { desc: string; capacity: string; bestFor: string } => {
    const details: {
      [key: number]: { desc: string; capacity: string; bestFor: string };
    } = {
      4: {
        desc: "Perfect for bathroom renovations",
        capacity: "30-40 bags",
        bestFor: "Small projects",
      },
      6: {
        desc: "Ideal for kitchen makeovers",
        capacity: "50-60 bags",
        bestFor: "Home renovations",
      },
      8: {
        desc: "Great for garden clearances",
        capacity: "70-80 bags",
        bestFor: "Garden projects",
      },
      10: {
        desc: "Perfect for house clearances",
        capacity: "90-100 bags",
        bestFor: "Large cleanouts",
      },
      12: {
        desc: "Construction & renovation",
        capacity: "110-120 bags",
        bestFor: "Building work",
      },
      14: {
        desc: "Major home projects",
        capacity: "130-140 bags",
        bestFor: "Extensions",
      },
      16: {
        desc: "Large construction jobs",
        capacity: "150-160 bags",
        bestFor: "Commercial use",
      },
      20: {
        desc: "Industrial projects",
        capacity: "200+ bags",
        bestFor: "Large commercial",
      },
      40: {
        desc: "Major construction sites",
        capacity: "400+ bags",
        bestFor: "Industrial",
      },
    };
    return (
      details[size] || {
        desc: "Custom solution",
        capacity: "Variable",
        bestFor: "Various projects",
      }
    );
  };

  const steps: Step[] = [
    { number: 1, title: "Location", icon: MapPin, completed: true },
    { number: 2, title: "Waste Type", icon: Truck, completed: true },
    {
      number: 3,
      title: "Skip Size",
      icon: CheckCircle,
      completed: false,
      current: true,
    },
    { number: 4, title: "Permits", icon: AlertTriangle, completed: false },
    { number: 5, title: "Schedule", icon: Calendar, completed: false },
    { number: 6, title: "Payment", icon: CreditCard, completed: false },
  ];

  if (loading) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>
      <ProgressSteps steps={steps} currentStep={currentStep} />
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 pb-32">
        <HeroSection />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12">
          {" "}
          {/* Added mb-8 for bottom space */}
          {skips.map((skip) => (
            <SkipCard
              key={skip.id}
              skip={skip}
              selectedSkip={selectedSkip}
              setSelectedSkip={setSelectedSkip}
              hoveredSkip={hoveredSkip}
              setHoveredSkip={setHoveredSkip}
              calculateTotalPrice={calculateTotalPrice}
              getSkipDetails={getSkipDetails}
            />
          ))}
        </div>
      </main>
      {/* Conditional footer */}
      {selectedSkip && (
        <footer className="fixed bottom-0 left-0 w-full bg-white/10 backdrop-blur-md border-t border-white/20 z-20 p-4">
          <div className="max-w-7xl mx-auto">
            <SelectedSkipDisplay
              selectedSkip={selectedSkip}
              skips={skips}
              calculateTotalPrice={calculateTotalPrice}
              setCurrentStep={setCurrentStep}
            />
          </div>
        </footer>
      )}
    </div>
  );
};

export default SkipHireApp;
