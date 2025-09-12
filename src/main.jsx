import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ProductDataCom from "./Context/DataContext/ProductDataCom.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductDataCom>

      <App />
    </ProductDataCom>
  </StrictMode>
);
