import React from 'react';
import './Search.css';
// import SearchIcon from '@material-ui/icons/Search';
// import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom'

function Search() {
    return (
        <div  className="upper__level">
				<div  className="lower__level">
                  
            <select className="item__level">
                          <option selected>Emirate</option>
                          <option value="Abu Dhabi">Abu Dhabi</option>
                          <option value="Dubai">Dubai</option>
                          <option value="Sharjah">Sharjah</option>
						              <option value="Ajman">Ajman</option>
						              <option value="Umm Al Quwain">Umm Al Quwain</option>
                          <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                          <option value="Fujairah">Fujairah</option>
                      </select>
                  
              </div>
				<div  className="lower__level">
                  
						<select className="item__level" >
					  <option selected>Rent</option>
							<option value="Buy">Buy</option>
                          <option value="Commercial Rent">Commercial Rent</option>
                          <option value="Commercial Buy">Commercial Buy</option>
                      </select>
                  
              </div>
				<div  className="lower__level  ">
                
            <select className="item__level">
                          <option selected>Property type</option>
                          <option value="Apartment">Apartment</option>
                          <option value="Villa">Villa</option>
                          <option value="Townhouse">Townhouse</option>
						              <option value="Penthouse">Penthouse</option>
						              <option value="Compound">Compound</option>
                          <option value="Duplex">Duplex</option>
                          <option value="Full Floor">Full Floor</option>
						              <option value="Whole Building">Whole Building</option>
						              <option value="Bulk Rent">Bulk Rent</option>
                          <option value="Bungalow">Bungalow</option>
                          <option value="Hotel Apartment">Hotel Apartment</option>
                      </select>
                  
              </div>
              <div  className="lower__level  ">
                 
						<select className="item__level" >
					 	              <option selected> Price (AED)</option>
                          <option value="Yearly">100-5,000</option>
                          <option value="Monthly">5,000-20,000</option>
                          <option value="Weekly">20,000-50,000</option>
                          <option value="Daily">50,000-100,000</option>
						              <option value="Daily">100,000-250,000</option>
						              <option value="Daily">250,000-500,000</option>
						              <option value="Daily">500,000-1,000,000</option>
						              <option value="Daily">1,000,000+</option>
                      </select>
                  
              </div>
				
				<div  className="lower__level  ">
                  
						<select className="item__level" >
					                <option selected>Rental Period</option>
                          <option value="Yearly">Yearly</option>
                          <option value="Monthly">Monthly</option>
                          <option value="Weekly">Weekly</option>
                          <option value="Daily">Daily</option>
                      </select>
                  
              </div>
				    <div  className="lower__level  ">
                  
						<select className="item__level" >
					 	              <option selected> Bedrooms </option>
                          <option value="Yearly">1</option>
                          <option value="Monthly">2</option>
                          <option value="Weekly">3</option>
						              <option value="Weekly">4</option>
						              <option value="Weekly">5+</option>
                 
                      </select>
                  
              </div>
				<div  className="lower__level">
						<select className="item__level" >
					 	              <option selected> Bathrooms </option>
                          <option value="Yearly">1</option>
                          <option value="Monthly">2</option>
                          <option value="Weekly">3</option>
						              <option value="Weekly">4</option>
						              <option value="Weekly">5+</option>
                      </select>
        </div>
        <div className="lower__level">
            
            <input 
            type="text" 
            className="search__text" 
            name="address" 
            placeholder="Enter landmark or city, community or building" 
            autocomplete="on" />

        <div className="lower__level"> 
            
             <Link to="/rentlist"> 
           <input 
            type="submit"
            className="submit__form" 
            />
           </Link>
          
        </div>
      </div>
        
     
           

              
              
            </div>
           


    )
}

export default Search