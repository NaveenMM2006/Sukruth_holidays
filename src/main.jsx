import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import "leaflet/dist/leaflet.css";
import "./utils/fixLeafletIcons";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter
      future={{
        v7_startTransition: true,    // Opt-in early to startTransition behavior
        v7_relativeSplatPath: true,  // Opt-in early to new splat route resolution
      }}
    >
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
