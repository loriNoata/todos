import React, { Component } from 'react';
import {connect} from 'react-redux'; 

import ArticleHeader from '../components/article/header';
import ArticleElements from '../components/article/footer';
import ArticleFooter from '../components/article/articleElements';


  
class SetArticles extends Component {
	constructor(props) {
        super(props);
     
    }

    render() {
        return(
            <div className="article-container">
                <ArticleHeader/>    
                <ArticleElements/>
                <ArticleFooter />
            </div>  
        )
    }
   
}


function mapStateToProps(state) {
    return {
        toDoList : state.toDoList
    }
}

const mapDispatchToProps = dispatch => {
    return {
       // onHandleAddToDoList: (toDo) => dispatch(addTodo(toDo)), 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SetArticles)