import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Landing/Laoder";
import Product from "../Product/Product";
import "./Store.css";
import { fetchProducts } from "./../../redux/products/productsAction";

const Store = () => {
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.productsState);
  useEffect(
    (() => {
      if (!productsState.products.length) dispatch(fetchProducts())
    },
    [])
  );

  return (
    <div className="container-fluid py-5 container-store-product">
         {
                productsState.loading ? 
                <Loader /> :
                productsState.error ?
                    <p>Somethin went wrong</p> :
                    productsState.products.map(product => <Product
                            key={product.id}
                            productData={product}
                        />)
            }

      {/* </div> */}
    </div>
  );
};

export default Store;
