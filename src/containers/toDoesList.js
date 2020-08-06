import React, { Component } from 'react';
import {connect} from 'react-redux'; 

import HeaderToDo from '../components/toDoes/header';
import Footer from '../components/toDoes/footer';
import ToDoes from '../components/toDoes/toDoes';


  
class ToDoesList extends Component {
	constructor(props) {
        super(props);
     
    }

    render() {
        return(
            <div className="container">
                <HeaderToDo/>    
                <ToDoes/>
                <Footer />
            </div>  
        )
    }
   
}


function mapStateToProps(state) {
    return {
        toDoList : state.toDoList
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//        // onHandleAddToDoList: (toDo) => dispatch(addTodo(toDo)), 
//     }
// }

export default connect(mapStateToProps)(ToDoesList)