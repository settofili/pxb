import React from 'react'
import "./Saleslist.css";
import Product from "./Product";
import Commercial from './images/commercial/commercial.jpg'
import Commercial2 from './images/commercial/commercial2.jpg'
import Commercial3 from './images/commercial/commercial3.jpg'
import Commercial4 from './images/commercial/commercial4.jpg'
import Commercial5 from './images/commercial/commercial4.jpg'

            function Saleslist () {
                return (
                <div>
                
                
                <div>

                <Product title="Vacant and Modern Design"
                address="Gold Vita, Dubai"
                price={35000000}
                image={Commercial}
                rating={3}
                bed= {5}
                toilet={2} 
                size="345 sq ft"
                />
                </div>

                <div>
                <Product title="Ready to move in"
                address="Al Marjan Island, Ras Al Khaimah"
                price={17000000}
                image={Commercial2}
                rating={3}
                bed= {5}
                toilet={4} 
                size="345 sq ft"
                />
                </div>
                
                <div>
                <Product title="Water Front"
                address="Jumeirah Village Circle"
                price={13000000}
                image={Commercial3}
                rating={3}
                bed= {3}
                toilet={2} 
                size="345 sq ft"
                />
                
                </div>

                <div>
                <Product title="Water Front"
                address="Khalifa City, Abu Dhabi"
                price={11000000}
                image={Commercial4}
                rating={3}
                bed= {3}
                toilet={4} 
                size="345 sq ft"
                />
                </div>

                <div>
                <Product title="Water Front"
                address="Abu Dhabi"
                price={18000000}
                image={Commercial2}
                rating={3}
                bed= {4}
                toilet={3} 
                size="345 sq ft"
                />
                </div>
                
                
               
                </div>
                );
                }
    
    export default Saleslist
    