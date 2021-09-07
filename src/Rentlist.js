import React from 'react'
import Header from './Header';
import Search from './Search';
import Footer from './Footer';
import Product from './Product';
import "./Rentlist.css";
import rent from './images/rent/rent.jpg'
import rent2 from './images/rent/rent2.jpg'
import rent3 from './images/rent/rent3.jpg'
import rent4 from './images/rent/rent4.jpg'
import rent1 from './images/rent/rent1.jpg'



function Rentlist () {
    return (
    <div className="home">
    <div className="home__container">
    
    <div className="home__row">

    <Product title="Vacant and Modern Design"
    address="Dubai Hills Estate, Dubai"
    price={350000.00}
    image={rent}
    rating={3}
    bed= {3}
    toilet={2} 
    size="345 sq ft"
    />
    <Product title="Ready to move in"
    address="The BLVD Downtown Dubai"
    price={70000}
    image={rent2}
    rating={3}
    bed= {3}
    toilet={2} 
    size="345 sq ft"
    />
    </div>
    
    <div className="home__row">
    <Product title="Water Front"
    address="Jumeirah Beach Residence"
    price={190000}
    image={rent3}
    rating={3}
    bed= {3}
    toilet={2} 
    size="345 sq ft"
    />
    </div>

    <div className="home__row">
    <Product title="Water Front"
    address="Dubai Creek Harbour"
    price={139000}
    image={rent4}
    rating={3}
    bed= {3}
    toilet={2} 
    size="345 sq ft"
    />
    </div>
    
    <div className="home__row">
    <Product title="Water Front"
    address="Al Reem Island, Abu Dhabi"
    price={139000}
    image={rent1}
    rating={3}
    bed= {3}
    toilet={2} 
    size="345 sq ft"
    />
    </div>

    </div>
    </div>
    );
    }
    
    export default Rentlist
    