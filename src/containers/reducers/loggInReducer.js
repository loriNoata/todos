const initialState = {
    inputName : '', 
    inputPassword: '', 
    loggedIn : false, 
    articleNo : 1, 
    articles: [], 
    allArticles: [], 
    isOpen: false,
    totalSum : 0, 
    companies: [], 
    usersFromCompany:[], 
    basket: []

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
            return {
                ...state, 
                totalSum : parseInt(state.totalSum) + parseInt(action.sum)
            }

        case "LOAD_TOTAL_SUM" :
            const objLength = action.data.length; 
            //console.log("action.data.length>>>", action);
            const lastObj = action.data[objLength-1];
            const totalSumFromSrv = parseInt(lastObj.value) + parseInt(lastObj.totalSum)
           
                return {
                    ...state, 
                    totalSum : totalSumFromSrv
                    }


        case "LOAD_ALL_COMPANIES" : 
            return {
                ...state, 
                companies: [...state.companies, ...action.companies]
                
            }

        case "LOAD_USERS_FROM_COMPANY" : 
          
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

        case "ADD_PRODUCT_TO_BASKET" :
            //console.log("basket initial", state.basket); 

            const productInBasket =  {
                product: action.product, 
                productNo: parseInt(action.productNo),
                price: parseInt(action.productNo) * parseInt(action.price), 
                id:  action.id 
            } 
                return {
                    ...state, 
                    basket: [...state.basket,  productInBasket  ] 
                }


        case "REMOVE_ONE_PRODUCT" : 
            const newBasketAfterElemRemove = state.basket.map(elem => {

                if (elem.id === action.id) {
                    return {
                        ...elem,
                        productNo: elem.productNo - 1, 
                        totalPrice: (elem.productNo - 1) * elem.price
                    } 
                 } else {
                        return{
                            ...elem
                        }
                    }
            })

            return {
                ...state, 
                basket : newBasketAfterElemRemove
            }

            case "REMOVE_THE_PRODUCT" : 
            const theBasket = state.basket.filter(elem => elem.id !== action.id)
    
            return {
                ...state, 
                basket : theBasket
            }


        case "ADD_ONE_PRODUCT" : 
            const increseObj = state.basket.map(elem => {
                if (elem.product === action.product) {
                    return {
                       ...elem,
                       productNo: elem.productNo + 1, 
                       totalPrice: (elem.productNo + 1) * elem.price
                    }  
                } else {
                    return {
                        ...elem
                    }

                }
            })
        
            return {
                ...state, 
               basket: increseObj  
            }

          
            
 

        default:  return state
    }
}

export default LogginReducer; 