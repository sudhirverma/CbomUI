import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const container: any = document.getElementById("root");

// Create a root.

const root = ReactDOMClient.createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
