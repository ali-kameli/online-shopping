import ProductsContextProvider from "./Components/context/ProductsContextProvider";
import React from "react";
import Store from "./Components/Store/Store";
import { Switch, Redirect, Route, withRouter } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails";
import CartContextProvider from "./Components/context/CartContextProvider";
import Navbar from "./Components/Navbar/Navbar";
import ShopCart from "./Components/ShopCart/ShopCart";
import SignIn from "./Components/signIn/SignIn";
import SignUp from "./Components/signUp/SignUp";
import Footer from "./Components/Footer/Footer";
import Landing from "./Components/Landing/Landing";
import { ToastContainer } from "react-toastify";

const App = (props) => {
  const { pathname } = props.location;
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <ToastContainer/>
        <Navbar />
        {pathname === "/products" ? <Landing /> : null}
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/products" component={Store} />
          <Route path="/cart" component={ShopCart} />
          <Redirect to="/products" />
        </Switch>
        <Footer />
      </CartContextProvider>
    </ProductsContextProvider>
  );
};

export default withRouter(App);
