import {ADD_TODO, REMOVE_TODO, TOGGLE_ACTIVE, FILTER } from './const'; 

export const addTodo = (toDo, id) => {
     return {
        type: ADD_TODO, 
        toDo, 
        id
    }
}

export const removeTodo = (toDo) => {
    return {
       type: REMOVE_TODO, 
       toDo
   }
}

export const toggleActive = (toDo) => {
    return {
        type: TOGGLE_ACTIVE, 
        toDo
    }
}

export const filtering = (filterBy) => {
    return {
        type: FILTER, 
        filterBy
    }
}
 
