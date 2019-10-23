import React, { Component } from 'react';
import {connect} from 'react-redux'; 


class ArticleElements extends Component {
	constructor(props) {
        super(props); 
        this.state = {
            isChecked  : true
        } 
    }

   componentDidMount() {

   }
   
    displayToDoes() {
        const {newsList} = this.props; 
        if (newsList.length>0)  {
            const elems = newsList.map( (elem, i) => {               
                return(
                    <div key={i}> 
                        <li >{elem.first_name}</li>
                    </div>
                )
            })
           return elems
        }  
    }

    loading() {
        return(
            <article className="headerContainer" >
                <h1>  loading ... </h1>
            </article>
        ) 
    }

    render() {
        const {newsList} = this.props; 
        const elemDisplay = (newsList.length > 0) ? this.displayToDoes() : this.loading()
          return( elemDisplay )
    }
}


function mapStateToProps(state) {
   
      return {
        newsList : state.ArticleReducer.newsList, 
        total_pages: state.ArticleReducer
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         // onHandleDelete: (toDo) => dispatch(removeTodo(toDo)), 
//         // onToggleActive: (toDo, isChecked) => dispatch(toggleActive(toDo, isChecked))
         
//     }
// }

export default connect(mapStateToProps)(ArticleElements)