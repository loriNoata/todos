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