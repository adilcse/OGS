import React from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import {AddToCart} from './CardAction';
import Card from './Card';

const mapStateToProps= state =>{
    console.log(state);
    return {
        source : state.source
    }
}
const mapDispatchToProps=(dispatch)=>{
   return {
    onItemAdded : (itemId) => dispatch(AddToCart(itemId)) 
   } 
}
const ProductCards =(props)=>{
    const dispatch = useDispatch();
    const source = useSelector((state) => (state.source))
    
//    const {source,onItemAdded}=props;
   console.log("re rendering",source);
    const onItemAdded = (itemId) => {
        dispatch(AddToCart(itemId))
    }
return (
    
    <div>
       
        {
            source.map((item,id) =>{    
               
                return <Card source={item} key = {id} addItem={onItemAdded} />
            } )
        }
    </div>
)
}

export default ProductCards; 