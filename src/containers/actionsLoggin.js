import {HANDLE_SUBMIT_LOGIN, HANDLE_SUBMIT_LOGOUT, LOAD_ARTICLE_PER_CLICK, LOAD_ALL_ARTICLES, DELETE_ALL_ARTICLES, OPEN_VIRTUAL_WALLET, 
    ADD_SUM_VALUE } from './const'; 

export const handleSubmitLogin = (inputName, inputPassword) => {
       return {
        type: HANDLE_SUBMIT_LOGIN, 
        inputName, 
        inputPassword
    }
}

export const handleSubmitLogout = () => {
      return {
        type: HANDLE_SUBMIT_LOGOUT, 

    }
}
 
export const loadArticlePerClick = (articleData) => {
    return {
        type: LOAD_ARTICLE_PER_CLICK, 
        articleData
    }
}

export const loadAllArticles = (articlesData) => {
    return {
        type: LOAD_ALL_ARTICLES, 
        articlesData
    }
}

export const deleteAllArticles = () => {
    return {
        type: DELETE_ALL_ARTICLES
    }
}


export const openVirtualWallet = () => {
    return {
        type: OPEN_VIRTUAL_WALLET
    }
}

export const addSumValue = (data, sum) => {
    return {
        type: ADD_SUM_VALUE, 
        data, 
        sum
    }
}

export const loadTotalSum = (data) => {
    console.log("+_++___", data)
    return {
        type: "LOAD_TOTAL_SUM", 
        data
    }
}



export const loadAllCompanies = (companies) => {
   
    return {
        type: 'LOAD_ALL_COMPANIES', 
        companies

    }
}

export const loadUsersFromCompany = (usersFromCompany, companyId) => {
    return {
        type: 'LOAD_USERS_FROM_COMPANY', 
        usersFromCompany, 
        companyId
    }
}

export const addNewCompany = (company, description) => {
    return {
        type: 'ADD_NEW_COMPANY', 
        company, 
        description
    }
}


export const addToBasket = (product, price, productNo, id) => {
    return (dispatch, getState) => {
        const myProductsFromBasket =  getState().LogginReducer.basket;
        
        if (myProductsFromBasket.length > 0) {
            const existingProduct = myProductsFromBasket.find(elm => elm.id === id)

            if (existingProduct) {
                return dispatch(addOneProduct(product, price, productNo))
            }   else {
                return dispatch(addProductToBasket(product, price, productNo, id))
            } 
 
        } else {
           return dispatch(addProductToBasket(product, price, productNo, id));
        }
        
    };
  };


export const addProductToBasket = (product, price, productNo, id) => {
    return {
        type: 'ADD_PRODUCT_TO_BASKET', 
        product, 
        price, 
        productNo,
        id
    }
}

export const addOneProduct = (product, price, productNo) => {
    return {
        type: 'ADD_ONE_PRODUCT', 
        product, 
        price, 
        productNo
    }
}




export const removeProductFromBasket = (product, price, productNo, id) => { //removeProductFromBasket
    return (dispatch, getState) => {
        const myProductsFromBasket =  getState().LogginReducer.basket;
 
        if (myProductsFromBasket.length >= 1) {
            const productToBeRemove = myProductsFromBasket.find(elm => elm.id === id)
            console.log("productToBeRemove ++++", productToBeRemove)
            if (productToBeRemove.productNo < 2 ) {
                dispatch(removeTheProduct(product, price, productNo, id))
            } else {
                dispatch(removeOneProduct(product, price, productNo, id)); 
            }
           
    };
  } 
}


export const removeOneProduct = (product, price, productNo, id) => {
    return {
        type: 'REMOVE_ONE_PRODUCT', 
        product, 
        price, 
        productNo, 
        id
    }
}

export const removeTheProduct = (product, price, productNo, id) => {
    return {
        type: 'REMOVE_THE_PRODUCT', 
        product, 
        price, 
        productNo, 
        id
    }
}


 