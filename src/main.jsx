import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/App.jsx";

import "@/styles/globals.css";

// Fonts from Fontsource (Inter)
import "@fontsource-variable/inter";

const rootElement = document.querySelector("#root");
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
