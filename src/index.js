import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AppState from "./context/Task/AppState";
import ThemeState from "./context/Theme/ThemeState";

ReactDOM.render(
  <React.StrictMode>
    <ThemeState>
      <AppState>
        <App />
      </AppState>
    </ThemeState>
  </React.StrictMode>,
  document.getElementById("root")
);
