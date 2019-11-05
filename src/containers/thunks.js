import {fetchUsersPerPage, fetchArticlesPerClick, fetchAllArticles}  from './api'; 

import {loadNews, fetchPostsRequest, fetchPostsFailure, fetchPostsRequestSuccess} from './actionsArticle'; 
import {loadArticlePerClick, loadAllArticles} from './actionsLoggin'

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