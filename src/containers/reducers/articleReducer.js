const initialState = {
    newsList : [] 
}

const ArticleReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOAD_NEWS" : 
        return {
                ...state, 
                newsList: action.news.data, 
                page: action.news.page, 
                totalPages: action.news.total_pages
        }

        case "FETCH_POSTS_FAILURE" : 
        console.log("+++ fail..", action);
        return {
            ...state, 
            error: action.error

        }
        default:  return state
    }
}

export default ArticleReducer; 