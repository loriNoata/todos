import {fetchUsersPerPage, fetchArticlesPerClick, fetchAllArticles,fetchAllCompanies, fetchUsersFromCompany, setSumToServer}  from './api'; 

import {loadNews, fetchPostsRequest, fetchPostsFailure, fetchPostsRequestSuccess} from './actionsArticle'; 
import {loadArticlePerClick, loadAllArticles, loadAllCompanies, loadUsersFromCompany, addSumValue} from './actionsLoggin'

export const fetchAndLoadNews = (pageNumber=1) => {
    return function(dispatch) {
        dispatch(fetchPostsRequest());
        fetchUsersPerPage(pageNumber).then(data => {
            dispatch(fetchPostsRequestSuccess());
            dispatch(loadNews(data));
        }).catch( function() {
            dispatch(fetchPostsFailure()); 
        })
    }
} 

export const fetchAndloadArticlePerClick = (articleNo=0) => {
    return function(dispatch) {
        fetchArticlesPerClick(articleNo).then(data => {
            dispatch(fetchPostsRequestSuccess())
            dispatch(loadArticlePerClick(data))
        }).catch(function() {
            dispatch(fetchPostsFailure()); 
        })
    }
}

export const fetchAndloadAllArticles = () => {
    return function(dispatch) {
        fetchAllArticles().then(data => {
            dispatch(fetchPostsRequestSuccess())
            dispatch(loadAllArticles(data))
        }).catch(function() {
            dispatch(fetchPostsFailure()); 
        })
    }
}


export const fetchAndGetCompanies = () => {
    return function(dispatch) {
        fetchAllCompanies().then( data => {
 
            dispatch(fetchPostsRequestSuccess())
            dispatch(loadAllCompanies(data))
        }).catch(function() {
            dispatch(fetchPostsFailure()); 
        })
    }
}

export const fetchAndGetUsersFromCompany = (id) => {
    return function(dispatch) {
        fetchUsersFromCompany(id).then(data =>{
            dispatch(fetchPostsRequestSuccess())
            dispatch(loadUsersFromCompany(data, id))
        }).catch(function() {
            dispatch(fetchPostsFailure()); 
        })
       
    }
}

export const setSumValueToServer = (sum) => {
    return (dispatch, getState) => {
        const state = getState();
    
        setSumToServer(sum).then( data => {
            console.log("state in thunks", state);
            console.log("sum in thunks", sum);
            console.log("data in thunks", data);
            dispatch(addSumValue(data, sum))
        
    })
}
}


 