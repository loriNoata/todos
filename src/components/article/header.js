import React, { Component } from 'react';
import {loadNews} from './../../containers/actionsArticle';  
import {connect} from 'react-redux'; 
import {fetchAndLoadNews} from './../../containers/thunks'; 
  

class ArticleHeader extends Component {
	constructor(props) {
        super(props); 
		this.state = {
             newsList: []
        }; 
     }

    onHandleChangeInput(event) {
        this.setState({
            newsList: []
        });  
    }

    render() {
          
         return(
			<header className="headerContainer">
                 <button onClick={this.props.onLoadNews}> Load CNN News </button> 
 			</header>
        )
    }
   
}


function mapStateToProps(state) {
     return {
        newsList : state.ArticleReducer.newsList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoadNews: () => dispatch(fetchAndLoadNews()), 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleHeader)