import React from 'react';
import './Nav.css';
import { MdMenu } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IconContext } from "react-icons";
import {Navbar,Form,Button,FormControl,Nav} from 'react-bootstrap';
const MyNavbar = ()=>{
    
    return(
//         <div className="nav-item">
//         <div className="container navbar navbar-expand-lg">
//         <a className="navbar-brand" href="#">MyGrosary</a>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>
//             <div className="nav-depart nav-item">
//                 <div className="depart-btn row">
                    
//                     <IconContext.Provider  value={{ style: { color:'white' },size : '1.25em' }}>
//                         <MdMenu/>
//                     </IconContext.Provider>
//                     <span>All Catagories</span>
//                     <ul className="depart-hover">
//                         <li className="active"><a href="#">Women’s Clothing</a></li>
//                         <li><a href="#">Men’s Clothing</a></li>
//                         <li><a href="#">Underwear</a></li>
//                         <li><a href="#">Kid's Clothing</a></li>
//                         <li><a href="#">Brand Fashion</a></li>
//                         <li><a href="#">Accessories/Shoes</a></li>
//                         <li><a href="#">Luxury Brands</a></li>
//                         <li><a href="#">Brand Outdoor Apparel</a></li>
//                     </ul>
//                     <IconContext.Provider  value={{ style: {marginLeft:'10px', color:'white' },size : '1.25em' }}>
//                         <IoIosArrowDown/>
//                     </IconContext.Provider>
//                 </div>
//             </div>
//             <nav className="nav-menu mobile-menu">
//                 <ul>
//                     <li className="active nav-item"><a href="./index.html">Home</a></li>
//                     <li className="nav-item"><a href="./shop.html">Shop</a></li>
//                     <li className="nav-item"><a href="#">Collection</a>
//                         <ul className="dropdown">
//                             <li><a href="#">Men's</a></li>
//                             <li><a href="#">Women's</a></li>
//                             <li><a href="#">Kid's</a></li>
//                         </ul>
//                     </li>
                  
//                     <li><a href="#">Pages</a>
//                         <ul className="dropdown">
//                             <li><a href="./blog-details.html">Blog Details</a></li>
//                             <li><a href="./shopping-cart.html">Shopping Cart</a></li>
//                             <li><a href="./check-out.html">Checkout</a></li>
//                             <li><a href="./faq.html">Faq</a></li>
//                             <li><a href="./register.html">Register</a></li>
//                             <li><a href="./login.html">Login</a></li>
//                         </ul>
//                     </li>
//                 </ul>
//             </nav>
//             <div id="mobile-menu-wrap"> menu</div>
//         </div>
//     </div>
<>
{/* <nav className="navbar navbar-expand-md bg-light">
    <div className="nav-item">
        <div className="nav-depart">
                <div className="depart-btn row">
                    
                    
                    <span>All Catagories</span>                     <ul className="depart-hover">
                         <li className="active"><a href="#">Women’s Clothing</a></li>
                         <li><a href="#">Men’s Clothing</a></li>
                         <li><a href="#">Underwear</a></li>
                         <li><a href="#">Kid's Clothing</a></li>
                         <li><a href="#">Brand Fashion</a></li>
                         <li><a href="#">Accessories/Shoes</a></li>
                         <li><a href="#">Luxury Brands</a></li>
                         <li><a href="#">Brand Outdoor Apparel</a></li>
                     </ul>
                     <IconContext.Provider  value={{ style: {marginLeft:'10px', color:'white' },size : '1.25em' }}>
                         <IoIosArrowDown/>
                     </IconContext.Provider>
                 </div>
             </div>
  <button className="navbar-toggler " style={{float:'right'}} type="button"  data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" style={{color : "white"}}><IconContext.Provider  value={{ style: { color:'white' },size : '1.25em' }}>
                        <MdMenu/>
                    </IconContext.Provider></span>
  </button>
  <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
    <div className="navbar-nav nav-menu">
        <ul>
       <li> <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a></li>
        <li><a className="nav-item nav-link" href="#">Features</a></li>
        <li><a className="nav-item nav-link" href="#">Pricing</a></li>
       <li><a className="nav-item nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a></li>
      </ul>
    </div>
  </div>
  </div>
</nav>
<br/> */}
  <Navbar bg="light" variant="light"  sticky="top">
  <Navbar.Brand>
  <div className="nav-depart ">
                <div className="depart-btn row">
                    
                    
                    <span>All Catagories</span>                    
                     <ul className="depart-hover">
                         <li className="active"><a href="#">Women’s Clothing</a></li>
                         <li><a href="#">Men’s Clothing</a></li>
                         <li><a href="#">Underwear</a></li>
                         <li><a href="#">Kid's Clothing</a></li>
                         <li><a href="#">Brand Fashion</a></li>
                         <li><a href="#">Accessories/Shoes</a></li>
                         <li><a href="#">Luxury Brands</a></li>
                         <li><a href="#">Brand Outdoor Apparel</a></li>
                     </ul>
                     <IconContext.Provider  value={{ style: {marginLeft:'10px' },size : '1.1em' }}>
                         <IoIosArrowDown/>
                     </IconContext.Provider>
                 </div>
             </div>
  </Navbar.Brand>
 
  <Form inline className="nav-depart   ">
    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    <Button variant="outline-primary">Search</Button>
  </Form>
  <Nav className="mr-auto ml-5 " defaultActiveKey="#home">
    <Nav.Link href="#home">Home</Nav.Link>
    <Nav.Link href="#features">Products</Nav.Link>
    <Nav.Link href="#pricing">Profile</Nav.Link>
  </Nav>
</Navbar>
</>
    )
}
export default MyNavbar;