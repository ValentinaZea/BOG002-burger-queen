import React from 'react';
import './App.scss';
import Chef from './views/chef/Chef.jsx';
import Orders from './views/orders/Orders.jsx';
import Waiter from './views/waiter/Waiter.jsx';
import Home from './views/home/Home.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
    </Router>
  );
}

export default App;
