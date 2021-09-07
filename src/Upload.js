import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import BackupIcon from '@material-ui/icons/Backup';
import { Link } from 'react-router-dom';
import './Upload.css';

function Upload() {
    return (
        <div>
          
          <div className="form__table"> 
            <form >
            <div className="form__elements">
            <h3>Welcome verified Agent, you can now list properties. </h3>
        
        <div>
                        <label className="label__items">
                        <strong>
                        Select Location: 
                        </strong>
                        </label>
                      
                      <select className="form__select">
                          <option selected="Abu Dhabi">Abu Dhabi</option>
                          <option value="Dubai">Dubai</option>
                          <option value="Sharjah">Sharjah</option>
						              <option value="Ajman">Ajman</option>
						              <option value="Umm Al Quwain">Umm Al Quwain</option>
                          <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                          <option value="Fujairah">Fujairah</option>
                      </select>
                  
        </div>
				        
        <div>
                      <label className="label__items">
                      <strong>
                      Rent or Buy: 
                      </strong>
                      </label> 
            
                      <select className="form__select">
                           <option selected = "Rent"> Rent </option>
                           <option value="Buy">Buy</option>
                           <option value="Commercial Rent">Commercial Rent</option>
                           <option value="Commercial Buy">Commercial Buy</option>
                    </select>
                  
       </div>
       
       
		   <div>
                      <label className="label__items">
                      <strong> 
                      Select Property Type: 
                      </strong>
                      </label>   
                     
                      <select className="form__select">
                          <option selected="Apartment">Apartment</option>
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
              
				
			<div>
                       <label className="label__items">
                       <strong> 
                       Rental Period: 
                       </strong>
                       </label>   
						          
                       <select className="form__select">
                          <option selected="Yearly">Yearly</option>
                          <option value="Monthly">Monthly</option>
                          <option value="Weekly">Weekly</option>
                          <option value="Daily">Daily</option>
                      </select>
                  
      </div>
			   
   
      <div>
                      <label className="label__items">
                      <strong> No: of Rooms:
                      </strong>
                      </label>   
						
                      <select className="form__select">
                          <option selected="Yearly">1</option>
                          <option value="Monthly">2</option>
                          <option value="Weekly">3</option>
						              <option value="Weekly">4</option>
						              <option value="Weekly">5+</option>
                      </select>
                  
       </div>
       
      
      
       <div>
                      <label className="label__items">
                      <strong>
                      No: of Bathrooms:
                      </strong>
                      </label> 
						
                      <select className="form__select">
                          <option selected="Yearly">1</option>
                          <option value="Monthly">2</option>
                          <option value="Weekly">3</option>
						              <option value="Weekly">4</option>
						              <option value="Weekly">5+</option>
                      </select>
        </div>            

        
        <div>
                       <label className="label__items">
                       <strong>
                       Title Deed No: 
                       </strong>
                       </label>   
						           <input className="form__inputselect" required/>
        </div>
              
        
        <div>
                       <label className="label__items">
                       <strong>
                       Enter Price in AED: 
                       </strong>
                       </label>   
						
                       <input className="form__inputselect" required/>
        </div>
           
              
    
        </div>
            
            
        </form>
          
          <div className="upload__form">
            <p>Upload</p>
          <Link to="/saleslist"><BackupIcon fontSize="large"/></Link>
          
    </div>
          </div>
 
    
        </div>
    );
};

export default Upload
