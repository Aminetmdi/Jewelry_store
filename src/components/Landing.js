import React, { useState } from "react";
import Banner from "../components/Banner";
import CardsBanner from "../components/CardsBanner";
import TextBanner from "../components/TextBanner";
import Sections from "../components/Sections";
import ProductContextProvider from "../context/ProductContextProvider";
import Product from "../components/shared/Product";
const Landing = () => {
  return (
    <div>
      <Banner />
      <CardsBanner />
      <ProductContextProvider>
        <Product />
      </ProductContextProvider>
      <TextBanner />
      <Sections />
    </div>
  );
};

export default Landing;
