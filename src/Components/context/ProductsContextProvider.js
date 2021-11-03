import React, { createContext, useEffect, useState } from "react";
import { getProducts } from "./../api";

export const ProductContext = createContext();

const ProductsContextProvider = (props) => {
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setProducts(await getProducts());
    };
    fetchAPI();
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductsContextProvider;
