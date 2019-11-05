import React, { Component } from 'react';
import {connect} from 'react-redux'; 
import { fetchAndloadArticlePerClick, fetchAndloadAllArticles} from '../../containers/thunks' 
import {deleteAllArticles, openVirtualWallet, addSumValue} from './../../containers/actionsLoggin';  
 

class LoggInArticle extends Component {
	constructor(props) {
        super(props); 
        this.state = {
            sumValue: ''
        }
    }

    displayArticle = (data) =>{
        if (data && data.length > 0) {
           const elemDispayed =  data.map(elem => {
                return (
                    <article key={elem.id}>
                        <div> {elem.id}: {elem.title} </div>
                        <div> {elem.body} </div>
                    </article>
                )
            })
            return elemDispayed
        }
    }

    onHandleAddSumValue = (e) => {
        e.preventDefault();
        this.setState({
            sumValue: e.target.value
        })
    }

    render() {
     
        return(
            <div>
                <button onClick={this.props.onOpenVirtualWallet}> Load your virtual wallet</button>
                <button onClick={() => this.props.onLoadArticlePerClick(this.props.articleNo)}> load new article </button>  
                <button onClick={this.props.onLoadAllArticles}> load all article </button> 
                Wallet value: {this.props.value}

                {/* better way of doing it?  */}
                {this.displayArticle(this.props.articleData)}
                {this.displayArticle(this.props.articlesData)}
                {/* better way of doing it?  */}

                { this.props.articleData || this.props.articlesData  
                    ? <button onClick={() => this.props.onDeleteAll(this.props.articleNo)}> Delete all  </button>
                    : null 
                } 

                { this.props.isOpen && (
                    <div > 
                        Your initial sum is 
                        add the sum you want : 
                        <input type="number" value={this.state.sumValue} onChange={this.onHandleAddSumValue}/> 
                        <button onClick= {() =>this.props.onAddSumValue(this.state.sumValue)}> Add the sum  </button> 


                    </div>
                )


                }

            </div>
        )
    }
}


function mapStateToProps(state) {
     
    console.log(":::", state.LogginReducer); 
    return {
        articleNo: state.LogginReducer.articleNo,  //filterSelector(state)
        articleData: state.LogginReducer.articleData, 
        articlesData: state.LogginReducer.articlesData, 
        isOpen: state.LogginReducer.isOpen, 
        value: state.LogginReducer.value
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoadArticlePerClick: (articleNo) => dispatch(fetchAndloadArticlePerClick(articleNo)), 
        onLoadAllArticles: () => dispatch(fetchAndloadAllArticles()), 
        onDeleteAll: () =>dispatch(deleteAllArticles()), 
        onOpenVirtualWallet: () => dispatch(openVirtualWallet()), 
        onAddSumValue: (sum) => dispatch(addSumValue(sum))
      
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoggInArticle)