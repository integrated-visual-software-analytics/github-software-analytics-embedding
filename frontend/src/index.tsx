import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const container = document.getElementById("root") as HTMLElement;

const root = createRoot(container);

root.render(
  <BrowserRouter basename="/github-software-analytics-embedding">
    <App />
  </BrowserRouter>
);
