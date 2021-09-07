import React from 'react'
import './Quicknav.css';
import { Link } from 'react-router-dom';


function Quicknav() {
    return (
       
                <div className="header__nav">

                    <div className="header__option"> 
                    <Link to="/"> <span >
                        Home Page</span> </Link>
                    </div>

                    <div className="header__option"> 
                    <Link to="/rentlist"> <span >
                        Rent</span> </Link>
                    </div>

                    <div className="header__option"> <Link to="/saleslist"> <span >
                        Buy</span></Link>
                    </div>


                    <div className="header__option">
                    <Link to="/rentlist"> <span >
                        Commercial Rent </span> </Link>
                    </div>

                    <div className="header__option">
                        <Link to="/saleslist"> <span >
                    Commercial Buy </span></Link>

                    </div>

                    <div className="header__option">
                    <Link to="/signup"> <span >
                        Agent Portal</span>
                        </Link>
                    </div>

                    <div className="header__option">
                    <Link to="/propfaxplus"> <span > 
                        Propfax Plus</span>
                        </Link>
                    </div>





                    </div>
                            
    );
}

export default Quicknav
