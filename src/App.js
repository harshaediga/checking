import React from 'react';
import Navbar from './Navbar.js';
import{BrowserRouter,Route} from "react-router-dom";
import Switch from 'react-switch';
import Home from './Home';
import Dashboard from './Dashboard';
import About from './About';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        
           <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Dashboard" exact component={Dashboard}/>
          <Route path="/about" exact component={About}/>
        </Switch>
      </BrowserRouter>
      
    </div>
  )
}

export default App
