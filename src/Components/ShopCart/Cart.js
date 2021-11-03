import React, { useContext } from "react";
import { shorten } from "./../helpers/functions";
import { CartContext } from "./../context/CartContextProvider";
import "./Cart.css";

const Cart = (props) => {
  const { dispatch } = useContext(CartContext);
  
  const { image, title, price, quantity,key } = props.data;
  console.log(title);

  return (
    <div className=" cart-basket-container ">
      <img src={image} alt="product" className="productImage " />
      <div className="data">
        <h3>{shorten(title)}</h3>
        <p>{price}</p>
        <p>{key}</p>
      </div>
      <div>
        <span className="quantity">{quantity}</span>
      </div>
      <div className="buttonContainer-cart">
        {quantity > 1 ? (
          <button
            onClick={() => dispatch({ type: "DECREASE", payload: props.data })}
          >
            -
          </button>
        ) : (
          <button
            onClick={() =>
              dispatch({ type: "REMOVE_ITEM", payload: props.data })
            }
          >
            <i className="fa fa-trash"></i>
          </button>
        )}
        <button
          onClick={() => dispatch({ type: "INCREASE", payload: props.data })}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Cart;
