import React, { useEffect, useState, createContext } from "react";

// API
import { getProducts } from "../services/api";

export const productContext = React.createContext();

const ProductContextProvider = ({ children }) => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setProduct(await getProducts());
    };

    fetchAPI();
  }, []);

  return (
    <div>
      <productContext.Provider value={products}>
        {children}
      </productContext.Provider>
    </div>
  );
};

export default ProductContextProvider;
