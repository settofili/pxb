import React from 'react';
import Header from './Header';
import Search from './Search';
import Footer from './Footer';
import Rentlist from './Rentlist';
import Saleslist from './Saleslist';
import Upload from './Upload';
import Signup from './Signup';
import Signin from './Signin';
import Quicknav from './Quicknav';
import Contactcard from './Contactcard';
import Home from './Home';
import Propfaxplus from './components/Propfaxplus';




import './App.css';
import { BrowserRouter as Router, Switch, Route }
from "react-router-dom";


function App() {
  return (
    <div> 
      
      
      <Router> 
        <Header />
        <Quicknav />
        
        <Switch>
         
       <Route path="/contactcard">
        <Contactcard />
        </Route>
        
        {/* <Route path="/mywallet">
        <Mywallet />
        </Route> */}

         <Route path="/signin">
          <Signin />
          </Route>

          <Route path="/signup">
          <Signup />
          </Route>
                  
         <Route path="/upload">
          <Upload />
          </Route>

        <Route path="/saleslist">
          <Search />
          <Saleslist />
          </Route>

        <Route path="/rentlist">
          <Search />
          <Rentlist />
          </Route>

          <Route path="/propfaxplus">
          <Propfaxplus />
          </Route>

          

        <Route path="/">
        <Search />
        <Home />
          </Route>

        </Switch>
      </Router>
    </div>
  )
}

export default App
