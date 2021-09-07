import React from 'react'
import './Header.css';
import Logo from './images/header/logo.jpg';
import { Link } from 'react-router-dom';



function Header() {

    

    return (
        

   <div>
       <div className="header__items">

       <div>
       <Link to="./">
       <img 
        className="header__logo"
        src={Logo}
        alt="App logo"
        />
        </Link>
       </div>
       <div>
        <h1 className="search_slogan"> Real Properties For Real People
        </h1>
        </div>


     

       </div>
       
   </div>
            
    )
};


export default Header
