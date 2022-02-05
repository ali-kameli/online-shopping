import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";

// Components
import Store from "./Components/Store";
import ProductDetails from "./Components/ProductDetails";
import Navbar from "./Components/Navbar/Navbar";
import ShopCart from "./Components/ShopCart";

// Redux
import store from "./redux/store";
import { signup } from "./services/userServices";


function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Switch>
        <Route path="/regiater" component={signup} />
        <Route path="/products/:id" component={ProductDetails} />
        <Route path="/products" component={Store} />
        <Route path="/cart" component={ShopCart} />
        <Redirect to="/products" />
      </Switch>
    </Provider>
  );
}

export default App;
