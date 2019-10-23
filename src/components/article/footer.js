import React, { Component } from 'react';
import {connect} from 'react-redux'; 
import {fetchAndLoadNews} from './../../containers/thunks'; 

 
class ArticleFooter extends Component {
	constructor(props) {
        super(props); 
    }
   
    render() {
        const {list, pages, page} = this.props; 
        console.log('page::',page);
       
        return(
			<footer className="footerContainer"  >
                {list && list.length>0 && (
                    pages.map(number => (
                      
                        <span key={number} className={(page==number) ? 'selected number' : 'number'} onClick={() => this.props.onLoadNamesPerPage(number)}>   
                             {number} 
                        </span>))
                )}  
 			</footer>
        )
    }
}

const pageFooter = (n) => {
    let arry = []
    for (let i=0; i< n; i++) {
        arry.push(i+1); 
    }
    return arry 
}

function mapStateToProps(state) {
    return {
        list : state.ArticleReducer.newsList, 
        page : state.ArticleReducer.page, 
        totalPages : state.ArticleReducer.totalPages, 
        pages : pageFooter(state.ArticleReducer.totalPages)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoadNamesPerPage: (number) => dispatch(fetchAndLoadNews(number)), 
    }
}

 export default connect(mapStateToProps, mapDispatchToProps)(ArticleFooter)