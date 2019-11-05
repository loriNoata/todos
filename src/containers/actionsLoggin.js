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

export const addSumValue = (sum) => {
    return {
        type: ADD_SUM_VALUE, 
        sum
    }
}