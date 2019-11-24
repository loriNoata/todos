import axios from 'axios'

export const fetchUsersPerPage = (pageNumber=1) => {
    const url = `https://reqres.in/api/users?page=${pageNumber}` 
    return fetch(url).then(data => data.json())
}

export const fetchArticlesPerClick = (articleNo=1) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${articleNo}`
    return fetch(url).then(data => data.json())
}

export const fetchAllArticles = () => {
    const url = `https://jsonplaceholder.typicode.com/posts/`
    return fetch(url).then(data => data.json())
}

export const fetchAllCompanies = () => {
    const url = `http://localhost:3000/companies`
    return fetch(url).then(data => data.json())
}

export const fetchUsersFromCompany = (id) => {
    const url = `http://localhost:3000/companies/${id}/users`
    return fetch(url).then(data => data.json())
}

export const setSumToServer = (value, totalSum) => {
    const url = `http://localhost:3000/sum`; 

    return axios.post(url, {
       value, 
       totalSum
      })
   
}

export const getTotalSum = () => {
    const url = `http://localhost:3000/sum`; 
    return fetch(url).then(data => data.json())
}