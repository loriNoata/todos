import {filterSelector} from './selectors'; 

const initialState = {
    toDoList : [], 
    filterBy: 'All', 
    inputVal: ''

}

const addTodoReducer = (state = initialState, action) => {
    
    switch (action.type) {

        case "ADD_TODO" : 
            const newToDo = {
                todo: action.toDo, 
                isActive: true, 
                id: action.id
            }

        return {
                ...state,  
                toDoList:state.toDoList.concat(newToDo)   //state.toDoList.concat(newToDo)  [...state.toDoList, newToDo ]
        }
        case "TOGGLE_ACTIVE" : 
            const toggleddList  = state.toDoList.map( elem =>  {
                if (elem.id === action.toDo.id) {
                    return   { 
                        ...elem,
                        isActive: !elem.isActive
                    }
                } 
                else {
                    return {
                        ...elem
                    }
   
                }
            })  
   
            return {
                ...state,
                toDoList: toggleddList
            }
    
        case "FILTER" : {
             return {
                ...state,
                filterBy: action.filterBy
            }
        }
        case "REMOVE_TODO" : 
            const updatedList = state.toDoList.filter( elem =>  (elem.id !== action.toDo.id)); 
            return {
                ...state, 
                toDoList: updatedList
            }

        default:  return state
    }
 
}

export default addTodoReducer; 