import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/tailwind.css"; // Import Tailwind CSS
import SkipHireApp from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SkipHireApp />
  </StrictMode>
);
