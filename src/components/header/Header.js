import React from 'react';
import Search from './Search';
import './Header.css';
const Header=()=>{
    return(
        <div className="container">
        <div className="inner-header">
            <div className="row">
                <div className="col-lg-2 col-md-2">
                    <div className="logo">
                        <a href="./index.html">
                            <img src="img/logo.png" alt=""/>
                        </a>
                    </div>
                </div>
               <Search/>
                <div className="col-lg-3 text-right col-md-3">
                    <ul className="nav-right">
                        <li className="heart-icon">
                            <a href="#">
                                <i className="icon_heart_alt"></i>
                                <span>1</span>
                            </a>
                        </li>
                        <li className="cart-icon">
                            <a href="#">
                                <i className="icon_bag_alt"></i>
                                <span>3</span>
                            </a>
                            <div className="cart-hover">
                                <div className="select-items">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className="si-pic"><img src="img/select-product-1.jpg" alt=""/></td>
                                                <td className="si-text">
                                                    <div className="product-selected">
                                                        <p>$60.00 x 1</p>
                                                        <h6>Kabino Bedside Table</h6>
                                                    </div>
                                                </td>
                                                <td className="si-close">
                                                    <i className="ti-close"></i>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="si-pic"><img src="img/select-product-2.jpg" alt=""/></td>
                                                <td className="si-text">
                                                    <div className="product-selected">
                                                        <p>$60.00 x 1</p>
                                                        <h6>Kabino Bedside Table</h6>
                                                    </div>
                                                </td>
                                                <td className="si-close">
                                                    <i className="ti-close"></i>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="select-total">
                                    <span>total:</span>
                                    <h5>$120.00</h5>
                                </div>
                                <div className="select-button">
                                    <a href="#" className="primary-btn view-card">VIEW CARD</a>
                                    <a href="#" className="primary-btn checkout-btn">CHECK OUT</a>
                                </div>
                            </div>
                        </li>
                        <li className="cart-price">$150.00</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Header;