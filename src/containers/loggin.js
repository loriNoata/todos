import React, { Component } from 'react';
import {connect} from 'react-redux'; 

import LoggIn from '../components/loggin/login';


  
export default class LoggInCom extends Component {
	constructor(props) {
        super(props);
     
    }

    render() {
        return(
            <div className="loggin-container">
                <LoggIn />    
            </div>  
        )
    }
   
}

 