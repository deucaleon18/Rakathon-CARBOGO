import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import FactoryDetail from "./pages/FactoryDetail"
import MarketPlace from "./pages/Marketplace"
import Factories from "./pages/Factories"
import Nav from "./components/navbar/navbar";

const Routing = () => {
    return (
      <div>
        <Router>
          <Nav /> 
          <Route exact path="/">
            <MarketPlace />
          </Route>
          <Route exact path="/factory/:id">
            <FactoryDetail/>
          </Route>
          <Route exact path="/factories">
            <Factories />
          </Route>
       
        </Router>
      </div>
    );
}

export default Routing

