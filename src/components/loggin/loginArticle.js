import React, { Component } from 'react';
import {connect} from 'react-redux'; 
import { fetchAndloadArticlePerClick, fetchAndloadAllArticles, fetchAndGetCompanies, fetchAndGetUsersFromCompany, setSumValueToServer} from '../../containers/thunks' 
import {deleteAllArticles, openVirtualWallet, addSumValue, addNewCompany, } from './../../containers/actionsLoggin';  
 

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
        }); 

    }

    displayUsersFromCompany = (arry, Id) => {
        const elem = arry.map(elm => {
             if (elm.companyId === parseInt(Id)) {
                return (<div key={elm.id}> {elm.teacher} </div>)
            }
            return null
        })
        return elem
    }

    // getNewCompany = () => {
    //     const 
    // }

    render() {
     
        return(
            <div>
                <button onClick={this.props.onOpenVirtualWallet}> Load your virtual wallet</button>
                <button onClick={() => this.props.onLoadArticlePerClick(this.props.articleNo)}> load new article </button>  
                <button onClick={this.props.onLoadAllArticles}> load all article </button> 
                 Wallet value: {this.props.totalSum}

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
                        <button onClick= {() =>this.props.onAddSumValue(this.state.sumValue, this.props.totalSum)}> Add the sum  </button> 
                    </div>
                )
                }

                <div> Companies: <button onClick={this.props.onGetCompanies}> get all companies </button> 
                {this.props.errorMsg && (
                    <div> {this.props.errorMsg}</div>
                )}

                {this.props.companies.map( elem =>  (
                    <ul key={elem.id}>
                        <li>
                            <h1>{elem.name}</h1> 
                            <span> {elem.descrition} </span>
                            <button onClick={() => this.props.onGetUsersFromCompany(elem.id)}>  get the users from {elem.name}</button>
                            {this.displayUsersFromCompany(this.props.usersFromCompany, elem.id)}
                        </li> 
                    </ul>
                )
                )}

                <button onClick={this.getNewCompany}> Add a new company</button>
                </div>

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
        totalSum: state.LogginReducer.totalSum, 
        companies: state.LogginReducer.companies, 
        usersFromCompany: state.LogginReducer.usersFromCompany, 
        errorMsg: state.ArticleReducer.error, 
        companyId : state.LogginReducer.companyId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoadArticlePerClick: (articleNo) => dispatch(fetchAndloadArticlePerClick(articleNo)), 
        onLoadAllArticles: () => dispatch(fetchAndloadAllArticles()), 
        onDeleteAll: () =>dispatch(deleteAllArticles()), 
        onOpenVirtualWallet: () => dispatch(openVirtualWallet()), 
        onAddSumValue: (sum, total) => dispatch(setSumValueToServer(sum, total)),  //addSumValue(sum)
        onGetCompanies : () => dispatch(fetchAndGetCompanies()), 
        onGetUsersFromCompany: (id) => dispatch(fetchAndGetUsersFromCompany(id)), 
        onAddNewCompany : () => dispatch(addNewCompany())
      
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoggInArticle)