import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// @ts-ignore: root element is there, trust me...
createRoot(document.getElementById("root")).render(<App />);
