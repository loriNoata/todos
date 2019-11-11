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

export const setSumToServer = (sum) => {
    console.log("api sum::: ", sum);
    const url = `http://localhost:3000/sum/`; 

    // server.use(jsonServer.bodyParser)
    // server.use((req, res, next) => {
    // if (req.method === 'POST') {
    //     req.body.sum = sum
    // }

    //https://github.com/typicode/json-server
    
    return fetch(url, {
        method: 'post',
        body: JSON.stringify(), 
        sum, 
        id: "333"
}).then(data =>  data.json());  
}