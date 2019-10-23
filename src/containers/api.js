export const fetchUsersPerPage = (pageNumber=1) => {
    const url = `https://reqres.in/api/users?page=${pageNumber}` 
    return fetch(url).then(data => data.json())
}

export const fetchBooksById = (id) => {
    const url = `https://jsonplaceholder.typicode.com/posts`
}