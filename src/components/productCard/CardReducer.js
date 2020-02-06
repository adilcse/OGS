import {ADD_TO_CART} from './constants';
import vegs from '../../img/vegs.png';
const initialState={
    source : [
        {
            imageurl: vegs,
            name: 'vegs',
            price: '500',
            id : 1,
            inCart : false

           
          }, {
            imageurl: vegs,
            name: 'maggie',
            price: '800',
            id : 2,
            inCart : false
           
          } , {
            imageurl: vegs,
            name: 'maggie',
            price: '800',
            id : 3,
            inCart : false
           
          } , {
            imageurl: vegs,
            name: 'maggie',
            price: '800',
            id : 4,
            inCart : false
           
          } ,
         {
            imageurl: vegs,
            name: 'maggie',
            price: '800',
            id : 5,
            inCart : false
           
          } 
    ]
}
export const AddItemsToCart = (state=initialState,action={})=>{
    switch(action.type){
        case  ADD_TO_CART:
            const index = state.source.findIndex(function(element){
                return (element.id == action.payload)
            }) 
            let Nstate=[...state.source];
             Nstate[index]={
                ...state.source[index],
                inCart:true
            }

            // console.log(Nstate);
            return {...state,source :Nstate };
        default : 
        return state;
    }
}