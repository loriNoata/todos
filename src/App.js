import React from 'react';
//import logo from './logo.svg';
import ToDoesList from './containers/toDoesList'; 
import SetArticles from './containers/setArticles'; 
import LoggInCom from './containers/loggin'; 
import './App.css';
 

function App() {
  return (
    <div className="App">
      <ToDoesList/>
      <SetArticles /> 
      <LoggInCom />
    </div>
  );
}

export default App;
