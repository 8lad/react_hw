import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { AppProvider } from "./context";
import { appReducer, initialState } from "./reducer";

ReactDOM.render(
  <AppProvider reducer={appReducer} initialState={initialState}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AppProvider>,
  document.getElementById("root")
);
