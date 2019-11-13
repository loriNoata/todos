import {LOAD_NEWS} from './const'; 

export const loadNews = (news) => {
     return {
        type: LOAD_NEWS, 
        news
    }
}

export const fetchPostsRequest = () => {
    return { 
        type: 'FETCH_POSTS_REQUEST' 
    }  
}

export const fetchPostsFailure = () => {  
    return { 
        type: 'FETCH_POSTS_FAILURE', 
        error: 'Oops, something went wrong' 
    } 
}  

export const fetchPostsRequestSuccess = () => { 
    return { 
        type: 'FETCH_POSTS_SUCCESS', 
         
    }
}  


 