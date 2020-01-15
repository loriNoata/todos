import React from 'react';
//import logo from './logo.svg';
import ToDoesList from './containers/toDoesList'; 
import SetArticles from './containers/setArticles'; 
import LoggInCom from './containers/loggin'; 
import Basket from './components/Basket/basket'
import './App.css';
import Products from './components/Products/products';
 

function App() {
  return (
    <div className="App">
      <ToDoesList/>
      <SetArticles /> 
      <LoggInCom />
      <Products />
      <Basket />
    </div>
  );
}

export default App;
