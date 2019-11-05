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