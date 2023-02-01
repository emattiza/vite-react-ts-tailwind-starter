import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "~/components/root/App";

const rootEl = document.getElementById("root");
if (rootEl) {
  const root = createRoot(rootEl)
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}