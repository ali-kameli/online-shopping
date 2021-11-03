import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContextProvider";
import { ProductContext } from "./context/ProductsContextProvider";
import { shorten } from "./helpers/functions";
import Loader from "./Landing/Laoder";
import "./productDetails.css";

const ProductDetails = (props) => {
  const { dispatch } = useContext(CartContext);

  const [details, setDetails] = useState([]);

  const id = props.match.params.id;

  const data = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return response.data;
  };

  useEffect(() => {
    const fetchAPI = async () => {
      setDetails(await data());
    };

    fetchAPI();
  }, []);

  return (
    <div className="container py-5 container-product-details">
      <div className="row">
        <div className="col-12 col-md-4">
          <img src={details.image} alt="product" className="w-75" />
        </div>
        <div className="col-12 col-md-8">
          <h3>{details.title}</h3>
          <hr />
          <p>{details.description}</p>
          <hr />
          <p>
            <span>Category:</span> {details.category}
          </p>
          <div>
            <span>{details.price} $</span>
            <div>
              <button
                onClick={() => dispatch({ type: "ADD_ITEM", payload: details })}
                className="btn btn-primary"
              >
                Add to Cart
              </button>
              <Link to="/products">
                <input className="btn btn-danger" value="Back to Store" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
