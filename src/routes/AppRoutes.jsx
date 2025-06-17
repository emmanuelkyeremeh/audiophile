import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Category from "../pages/Category";
import Product from "../pages/Product";
import Checkout from "../pages/Checkout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="category/:category" element={<Category />} />
        <Route path="product/:slug" element={<Product />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
