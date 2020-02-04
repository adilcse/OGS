import React from 'react';
import './App.css';
import CatagoryList from './components/catagoryCard/CatagoryList';
//import Nav from './components/navigation/Nav';
//import Header from './components/header/Header';

import Nav from './components/navigation/Nav';
import Card from './components/productCard/Card';
import vegs from './img/vegs.png';
const source={
  imageurl:vegs,
  name:'vegs',
  price : '500'
}
function App() {
  return (
    <div>
      {/* <Header/> */}
      <Nav/>        
      <CatagoryList/>
    <Card source={source}/>
    </div>
   
  );
}

export default App;
