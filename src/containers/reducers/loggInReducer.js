const initialState = {
    inputName : '', 
    inputPassword: '', 
    loggedIn : false, 
    articleNo : 1, 
    articles: [], 
    allArticles: [], 
    isOpen: false,
    value : 0

}

const LogginReducer = (state = initialState, action) => {
     switch (action.type) {
        case "HANDLE_SUBMIT_LOGIN" : 
            if (action.inputName && action.inputPassword) {
                return {
                    ...state, 
                    inputName: action.inputName, 
                    inputPassword: action.inputPassword, 
                    loggedIn : true 
                }
            }

        case "HANDLE_SUBMIT_LOGOUT" : 
            return {
                ...state, 
                loggedIn : false
            }

        case "LOAD_ARTICLE_PER_CLICK" : 
            return {
                ...state, 
                articleData: state.articles.concat(action.articleData), 
                articleNo: state.articleNo + 1
                
            }

        case "LOAD_ALL_ARTICLES": 
         return {
            ...state, 
            articlesData: state.allArticles.concat(action.articlesData)
        }

        case "DELETE_ALL_ARTICLES": 
            return {
                ...state, 

            }

        case "OPEN_VIRTUAL_WALLET" : 
            return {
                ...state, 
                isOpen: !state.isOpen
            }

        
        case "ADD_SUM_VALUE" : 
        console.log('add sum value', action.sum); 
            return {
                ...state, 
                value : parseInt(state.value) + parseInt(action.sum)
            }

        default:  return state
    }
}

export default LogginReducer; 