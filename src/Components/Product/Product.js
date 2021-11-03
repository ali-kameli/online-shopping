import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { isInCart, quantityCount, shorten } from "./../helpers/functions";
import { CartContext } from "./../context/CartContextProvider";
import "./product.css";


const Product = ({ productData }) => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div className="product-cart my-3 pt-4">
      <img src={productData.image} alt="product" className="p-3 mb-4" />
      <h4>{shorten(productData.title)}</h4>
      <p>{productData.price} $</p>
      <Link to={`/products/${productData.id}`}>
        <input type="button" className="btn detail-product" value="Detail" />
      </Link>

      {quantityCount(state, productData.id) > 1 && (
        <button
          onClick={() => dispatch({ type: "DECREASE", payload: productData })}
          className="btn-cart-product"
        >
          -
        </button>
      )}

      {quantityCount(state, productData.id) === 1 && (
        <button
          onClick={() =>
            dispatch({ type: "REMOVE_ITEM", payload: productData })
          }
          className="btn-cart-product"
        >
          <i className="fa fa-trash-alt"></i>
        </button>
      )}
      {quantityCount(state, productData.id) > 0 && (
        <span>{quantityCount(state, productData.id)}</span>
      )}

      {isInCart(state, productData.id) ? (
        <button
          onClick={() => dispatch({ type: "INCREASE", payload: productData })}
          className="btn-cart-product"
        >
          +
        </button>
      ) : (
        <button
          onClick={() => dispatch({ type: "ADD_ITEM", payload: productData })}
          className="btn-cart-product-add"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default Product;
