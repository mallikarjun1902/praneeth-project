import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "react-phone-number-input/style.css";
import App from "./App";
import "react-phone-number-input/style.css";
import store from "./store";
import { Provider } from "react-redux";

/**
 * @description rendering the App component.
 */
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
