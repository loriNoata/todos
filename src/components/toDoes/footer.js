import React, { Component } from 'react';
import {connect} from 'react-redux'; 
import {filtering} from '../../containers/actions'; 
 
class Footer extends Component {
	constructor(props) {
        super(props); 
 
    }

     
    render() {
        return(
			<footer className={`footerContainer ${this.props.buttonActive}`}>
				Show: 
                <button className="All" onClick={() => this.props.onHandleFilter("All")}> All </button>
                <button className="Completed" onClick={() => this.props.onHandleFilter("Completed")}> Completed </button>  
                <button className="Active" onClick={() => this.props.onHandleFilter("Active")}> Active </button>
 			</footer>
        )
    }
   
}


function mapStateToProps(state) {
  
    return {
        //toDoList : state.AddTodoReducer.toDoList, 
        buttonActive: state.AddTodoReducer.filterBy
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onHandleFilter : (filterBy) => dispatch(filtering(filterBy)), 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)