import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/index.css";
import Layout from "./views/Layout";
import { AppStoreProvider } from "./store/AppStore";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppStoreProvider>
      <Layout />
    </AppStoreProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
