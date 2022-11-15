import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Products from "./components/Products";
import ProductContextProvider from "./context/ProductContextProvider";
import ProductsDetails from "./components/shared/ProductsDetails";

const App = () => {
  return (
      <ProductContextProvider>
        <Hero />
        <Navbar />
        <Routes>
          <Route path="/products/:id" element={<ProductsDetails />} />
          <Route path="/" element={<Landing />} />
          <Route path="/products" element={<Products />} />
          <Route path="/" element={<Navigate to="/" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </ProductContextProvider>
  );
};

export default App;
