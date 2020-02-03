import React from 'react';
import { IoIosSearch,IoIosArrowDown } from "react-icons/io";
import { IconContext } from "react-icons";
const Search=()=>{
    return(
     
        <div className="col-lg-7 col-md-7">
        <div className="advanced-search">
            <button type="button" className="category-btn">
              <div className="row">
              <IconContext.Provider  value={{ style: { marginTop: '2px',marginLeft : '15px' },size : '1.25em' }}>
              All Categories  <IoIosArrowDown/>
              </IconContext.Provider>
              </div>
                
                </button>
            <div className="input-group">
                <input type="text" placeholder="What do you need?"/>
                <IconContext.Provider  value={{size : '1.5em' }}>
                <button type="button"><IoIosSearch/></button>
                </IconContext.Provider>
            </div>
        </div>
    </div>

    )
}
export default Search;