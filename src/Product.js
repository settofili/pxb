import React from "react";
import "./Product.css";
import HotelRoundedIcon from '@material-ui/icons/HotelRounded';
import BathtubRoundedIcon from '@material-ui/icons/BathtubRounded';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import CallRoundedIcon from '@material-ui/icons/CallRounded';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';

// import { useStateValue } from './StateProvider';



function Product({ id, image, price, title,  address, bed, toilet, size, rating }) {
    
    // const [{ basket }, dispatch] = useStateValue();
    // console.log('this is the basket >>> ', basket);
    // const addToBasket = () => {
    //     // dispatch some action into the data layer
    //     dispatch({
    //         type: 'ADD_TO_BASKET',
    //         item: {
    //             id: id,
    //             title: title, 
    //             image: image, 
    //             price: price, 
    //             rating: rating,
    //         },
    //     });
    // };
    return (
        <div className="product">
            <img 
            className="image__product"
            src={image}
            alt=""/>
            
            <div className="product__info">
                <p className="product__price"> 
                
                <strong>{price} </strong>
                <strong> AED </strong>
                </p>
                <p className="product__desciption"> {title}</p>
                <p className="product__desciption"> <LocationOnRoundedIcon /> {address}  </p>
                <p className="product__desciption"> <HotelRoundedIcon />  {bed}  </p>
                <p className="product__desciption"> <BathtubRoundedIcon />  {toilet}  </p>
                <p className="product__desciption"> {size} </p>
                
                <div className="product__desciption"> 
                <p> Contact Agent</p>
                <Link to="contactcard">
                <IconButton> <CallRoundedIcon className="call__icon" /> </IconButton> 
                </Link>
                
                <Link to="contactcard"> 
                <IconButton> <EmailRoundedIcon className="email__icon" /> </IconButton>
                </Link>
                </div>
                
 
            </div>

        </div>
    )
}

export default Product
