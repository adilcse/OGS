import React from 'react';
import './Card.css';
import Card from './Card';
import vegs from '../../img/vegs.png';

const CatagoryList =()=>{
    return(
        <div className="banner-section spad">
        <div className="container-fluid">
            <div className="row">
             <Card img={vegs} text={"Food"}/>
             <Card img={vegs} text={"Rice"}/>
             <Card img={vegs} text={"Onion"}/>
             <Card img={vegs} text={"Oils"}/>
            </div>
        </div>
    </div>
    )
}

export default CatagoryList;