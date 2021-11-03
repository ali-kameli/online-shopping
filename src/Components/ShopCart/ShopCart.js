import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./../context/CartContextProvider";
import Cart from "./Cart";
import "./ShopCart.css";

const ShopCart = () => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div className="container-shopcart">
      <div className="cartContainer ">
        {state.selectedItems.map((item) => (
          <Cart key={item.id} data={item} />
        ))}
      </div>
      <div>
        {state.itemsCounter > 0 && (
          <div className="payments">
            <p>
              <span>Total Items : </span>
              {state.itemsCounter}
            </p>
            <p>
              <span>Total Peyments : </span>
              {state.total} $
            </p>
            <div className="buttonContainer">
              <button
                className="checkout"
                onClick={() => dispatch({ type: "CHECKOUT" })}
              >
                Check Out
              </button>
              <button
                className="clear"
                onClick={() => dispatch({ type: "CLEAR" })}
              >
                Clear
              </button>
            </div>
          </div>
        )}
      </div>
      {!state.checkout && state.itemsCounter === 0 && (
        <div className="complete col-12 text-center">
          <h3>want to Buy ?</h3>
          <Link to="/products">Go to Shop</Link>
        </div>
      )}
      {state.checkout && (
        <div className="complete col-12 text-center">
          <h3>Checked Out Successfully</h3>
          <Link to="/products">Buy more</Link>
        </div>
      )}
    </div>
  );
};

export default ShopCart;
