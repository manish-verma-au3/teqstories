import React from 'react';
import Home from './Home';
import Admin from './Admin';
import Cart from './Cart'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path='/cart' component={Cart}/> 
        <Route path='/admin' component={Admin}/> 
      </Switch>
</Router>
  );
}

export default App;
