import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { CartContext } from "./../context/CartContextProvider";
import "./Navbar.css";
import digi from "../assets/digistore.png"

const Navbar = () => {
  const { state } = useContext(CartContext);

  return (
    <div class="container-fluid p-0 sticky-top">
      <div class="row m-0">
        <div class="col-12 p-0">
          <nav class="navbar navbar-expand-lg navbar-dark py-0">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon "></span>
            </button>
            <Link class="navbar-brand navbar-logo col-3" to="/products">
             <img src={digi} alt="digi" className="w-100"/>
            </Link>

            <div class="collapse navbar-collapse " id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <div>
                    <form className="form-contorol mt-2 ">
                      <div class="input-group">
                        <input type="text" size="70" className="w-75" placeholder="Search" />
                        <div class="input-group-prepend">
                          <span class="input-group-text navbar-icon">
                            <i className="fa fa-search"></i>
                          </span>
                        </div>
                      </div>
                    </form>
                  </div>
                </li>
              </ul>
            </div>

            <ul class="ul-login m-0">
              <span>
                <i className="fa fa-user fa-user-navbar "></i>
              </span>
              <div className="sign-in-navbar">
                <NavLink activeStyle={{color:"limegreen"}} class="nav-link" to="/signin">
                  Sign in
                </NavLink>
                <NavLink activeStyle={{color:"limegreen"}} class="nav-link" to="/signup">
                  Sign up
                </NavLink>
              </div>
            </ul>
            <ul>
              <li>
                <Link to="/cart">
                  <span>
                    <i className="fa fa-shopping-cart"></i>
                  </span>
                </Link>
                <span className="span-counter">{state.itemsCounter}</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
