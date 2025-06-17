import React from "react";
import AppRoutes from "./routes/AppRoutes";
import "./styles/App.css";
import { BrowserRouter } from "react-router-dom";
import OrderConfirmationModal from "./components/OrderConfirmationModal";

const App = () => {
  return (
    <div className="app-container">
      <BrowserRouter>
        <AppRoutes />
        <OrderConfirmationModal />
      </BrowserRouter>
    </div>
  );
};

export default App;
