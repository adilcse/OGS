import React from 'react';
import './App.css';
import CatagoryList from './components/catagoryCard/CatagoryList';
//import Nav from './components/navigation/Nav';
//import Header from './components/header/Header';

import Nav from './components/navigation/Nav';
import Card from './components/productCard/Card';
import vegs from './img/vegs.png';
import ProductCards from './components/productCard/ProductCards';

function App(props) {
  
  return (
    <div>
      {/* <Header/> */}
      <Nav />
      {/* <CatagoryList /> */}
      <ProductCards/>
    </div>

  );
}

export default App;
