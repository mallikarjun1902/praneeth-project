import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import 'react-phone-number-input/style.css'
import App from "./App";
import reportWebVitals from "./reportWebVitals"; 
import 'react-phone-number-input/style.css'
import Footer from "./components/global components/footer/footercomponents";
import NavBar from "./components/global components/Navbar/Navbar";
import store from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <NavBar />
      <App />
      <Footer />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
