const initialState = {
    inputName : '', 
    inputPassword: '', 
    loggedIn : false, 
    articleNo : 1, 
    articles: [], 
    allArticles: [], 
    isOpen: false,
    value : 0, 
    companies: [], 
    usersFromCompany:[]

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
        console.log('ADD_SUM_VALUE  action ...', action); 
        console.log(' ADD_SUM_VALUE state...', state); 

            return {
                ...state, 
                value : parseInt(state.value) + parseInt(action.sum)
            }

        case "LOAD_ALL_COMPANIES" : 
            return {
                ...state, 
                companies: [...state.companies, ...action.companies]
                
            }

        case "LOAD_USERS_FROM_COMPANY" : 
            console.log("!!!! action::", action );
            const usersFromComp = action.usersFromCompany.map(elem => console.log(elem.id))
            return {
                ...state, 
                //companyId: 
                usersFromCompany: [ ...action.usersFromCompany]
            }

        case "ADD_NEW_COMPANY" : 
            return {
                ...state, 
                companies: [...state.companies, ...action.companies]
            }

        default:  return state
    }
}

export default LogginReducer; 