import React, { Component } from 'react';
import {connect} from 'react-redux'; 
import {removeTodo, toggleActive} from '../../containers/actions';  
import {filterSelector} from '../../containers/reducers/selectors'; 


class ToDoes extends Component {
	constructor(props) {
        super(props); 
        this.state = {
            isChecked  : true
        } 
    }
   
    displayToDoes() {
         if ( this.props.toDoList && this.props.toDoList.length > 0)  {
            
            const elems = this.props.toDoList.map( (elem) => {
                const classTgl = (elem.isActive) ? 'isActive' : 'isComplete'; 
               
                return(
                    <article className="headerContainer" key={elem.id}>
                        <span className={classTgl}> 
                           <span onClick={() => this.props.onToggleActive(elem)}>{elem.todo} </span>    
                        </span>
                        <button onClick={() =>this.props.onHandleDelete(elem, this.state.isChecked)}> Delete ToDo </button>
                    </article>
                )
            })
           return elems
        }  
        else {
            return(
                <article className="headerContainer" >
                    <h1>  ... </h1>
                </article>
            ) 
      }
    }
   

    render() {
        return(
           this.displayToDoes()  
        ) 
    }
}


function mapStateToProps(state) {
     return {
        toDoList : filterSelector(state.AddTodoReducer)  //filterSelector(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onHandleDelete: (toDo) => dispatch(removeTodo(toDo)), 
        onToggleActive: (toDo, isChecked) => dispatch(toggleActive(toDo, isChecked))
         
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoes)