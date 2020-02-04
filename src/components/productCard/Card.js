import React from 'react';
import { Card as Cardboot ,Button} from 'react-bootstrap';
import './Card.css';
// import {Link} from 'react-router-dom';

class Card extends React.Component{
  
  render(){
    const source= this.props.source;
   

return(



<Cardboot  className="crd shadow" >
<Cardboot.Img variant="top" src={source.imageurl} className="card-img zoom" />

  <Cardboot.Body>
    <Cardboot.Title><div className="title">{source.name}</div></Cardboot.Title>
    <Cardboot.Text>
   <h3><i><small><strike>MRP ₹{Math.floor(parseInt(source.price)*1.1)}</strike></small> </i>₹{source.price}</h3>
    </Cardboot.Text>
  
    <Button variant="primary" >Buy </Button> 
   
    <Button variant="primary">Add to Cart</Button> 
  </Cardboot.Body>
  <div id="snackbar">Item Added to Cart</div>
</Cardboot>
 
);

}}
export default Card;