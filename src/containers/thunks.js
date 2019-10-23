import {fetchUsersPerPage}  from './api'; 
import {loadNews, fetchPostsRequest, fetchPostsFailure, fetchPostsRequestSuccess} from './actionsArticle'; 

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