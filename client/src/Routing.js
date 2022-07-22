import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import FactoryDetail from "./pages/FactoryDetail"
import MarketPlace from "./pages/Marketplace"
import Factories from "./pages/Factories"


const Routing = () => {
    return (
      <div>
         <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <MarketPlace />}>
           
          </Route>
          <Route exact path="/factory/:id" element={ <FactoryDetail/>}>
          </Route>
          <Route exact path="/factories" element={ <Factories />}>
          </Route>
       
        </Routes>
        </BrowserRouter>
      </div>
    );
}

export default Routing

