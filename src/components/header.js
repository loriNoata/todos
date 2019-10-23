import React, { Component } from 'react';
import {addTodo} from './../containers/actions';  
import {connect} from 'react-redux'; 

  

 class HeaderToDo extends Component {
	constructor(props) {
        super(props); 
		this.state = {
             inputValState: '', 
             idElem: null
        }; 
       //this.onHandleChangeInput = this.onHandleChangeInput.bind(this);
    }

    onHandleChangeInput = (event) => {
        this.setState({
            inputValState: event.target.value, 
            idElem: parseInt(Math.random() * 100)
        }); 

    }

    render() {
        const {inputVal} = this.props; 
         return(
			<header className="headerContainer">
                <input type='text' value={this.state.inputValState} onChange={this.onHandleChangeInput}/> 
                <button onClick={() => this.props.onClickAddToDo(this.state.inputValState, this.state.idElem)}> Add toDo </button>
 			</header>
        )
    }
   
}


function mapStateToProps(state) {
    return {
        inputVal : state.AddTodoReducer.inputVal
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onClickAddToDo: (inputVal, idElem) => dispatch(addTodo(inputVal, idElem)), 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderToDo)