import React, { useContext } from "react";
import Loader from "../Landing/Laoder";
import Product from "../Product/Product";
import { ProductContext } from "./../context/ProductsContextProvider";
import "./Store.css";

const Store = () => {

  const products = useContext(ProductContext);

  return (
    <div className="container-fluid py-5 container-store-product">
        <h2 className="col-1"><em>Product</em></h2>
      <div className="row">
       {
         products.length ?
          products.map((product) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3  store-product">
              <Product key={product.id} productData={product} />
            </div>
          ))
          :<Loader/>
       }
      </div>
    </div>
  );
};

export default Store;
