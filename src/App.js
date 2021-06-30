import React from "react";
import "./App.scss";
import Chef from "./views/chef/Chef.jsx";
import Orders from "./views/orders/Orders.jsx";
import OrdersToDeliver from './views/waiter/OrdersToDeliver.jsx'
import PlaceOrder from "./views/waiter/PlaceOrder.jsx";
import Home from "./views/home/Home.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/waiter/PlaceOrder">
          <PlaceOrder />
        </Route>
        <Route exact path="/waiter/OrdersToDeliver">
          <OrdersToDeliver />
        </Route>
        <Route exact path="/chef">
          <Chef />
        </Route>
        <Route exact path="/orders">
          <Orders />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
