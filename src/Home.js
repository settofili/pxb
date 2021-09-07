import React from 'react';
import './Home.css';
import rent from './images/rent/rent.jpg';
import rent2 from './images/rent/rent2.jpg';
import rent3 from './images/rent/rent3.jpg';
import rent4 from './images/rent/rent4.jpg';
import rent1 from './images/rent/rent1.jpg';
import commercial from './images/commercial/commercial.jpg';
import commercial2 from './images/commercial/commercial2.jpg';



function Home() {
    return (
        <div>

            <div className="img__division"> 
                
            <div>
                <img className="home__img" src={rent1}alt=""/>
            </div>
            <div>
                <img className="home__img" src={commercial}alt=""/>
            </div>
            <div>
            <img className="home__img" src={rent4} alt=""/>
            </div>

            </div>
            <div className="img__division"> 
                
                <div>
                    <img className="home__img" src={commercial2}alt=""/>
                </div>
                <div>
                    <img className="home__img" src={rent2}alt=""/>
                </div>
               
    
                </div>
                <div className="img__division"> 
                
                <div>
                    <img className="home__img" src={rent3}alt=""/>
                </div>
                
               
    
                </div>
    
            

        </div>
    )
}

export default Home
