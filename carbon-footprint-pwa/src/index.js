import React from "react";
import ReactDOM from "react-dom/client";
import { Workbox } from "workbox-window";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import theme from "./theme";

import "./index.css";

if ("serviceWorker" in navigator) {
  const wb = new Workbox("./service-worker.js");
  wb.register();
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);

reportWebVitals();