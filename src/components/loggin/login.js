import React, { Component } from 'react';
import {connect} from 'react-redux'; 
import {handleSubmitLogin, handleSubmitLogout} from '../../containers/actionsLoggin' 
import LoggInArticle from './loginArticle'; 

class LoggIn extends Component {
	constructor(props) {
        super(props); 
        this.state = {
            inputName: '', 
            inputPassword: ''
        } 
    }
   
    onHandleInputName = (e) => {
          this.setState({
            inputName : e.target.value
         })
    }

    onHandleInputPassword = (e) => {
          this.setState({
            inputPassword : e.target.value
         })
    }


    render() {
        const {loggedIn} = this.props;
        const {inputName,inputPassword } = this.state; 
        return(
            <div className="login-area">
                {loggedIn  && (
                    <div> 
                        <h1> Welcome {inputName} </h1> 
                        <LoggInArticle />
                        <input type="submit" value="Logout" onClick={this.props.onHandleSubmitLogout}/>
                    </div>
                )}  

                {!loggedIn && (
                    <div> 
                        <h1> User is Logout</h1> 
                        <input type="text" onChange={this.onHandleInputName}/>
                        <input type="text"  onChange={this.onHandleInputPassword}/>
                        <input type="submit" value="Login" onClick={() => this.props.onHandleSubmitLogin(inputName, inputPassword)}/>
                    </div>
                )}  
            </div>
        )

    }
}


function mapStateToProps(state) {
      return {
        inputName : state.LogginReducer.inputName,  //filterSelector(state)
        inputPassword : state.LogginReducer.inputPassword, 
        loggedIn : state.LogginReducer.loggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onHandleSubmitLogin: (inputName, inputPassword) => dispatch(handleSubmitLogin(inputName, inputPassword)), 
        onHandleSubmitLogout: () => dispatch(handleSubmitLogout()) 
    }
}

export default connect(mapStateToProps,  mapDispatchToProps)(LoggIn)