import React from 'react';
import './Card.css';

const Card =(props)=>{
    const {img,text}=props;
    return(
        <div className="col-lg-4">
            <div className="single-banner">
                <img src={img} alt="veg"/>
                <div className="inner-text">
                    <h4>{text}</h4>
                </div>
            </div>    
    </div>
    );
}
export default Card;