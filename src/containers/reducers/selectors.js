 
 export const filterSelector = (state) => {

     if (state.toDoList  && state.toDoList.length>0) {
        const activeList  = state.toDoList.filter( elem =>  {
                if (elem.isActive) {
                    return   { 
                        ...elem
                    }
                } 
            })
            
            const completedList  = state.toDoList.filter( elem =>  {
                if (!elem.isActive) {
                    return   { 
                        ...elem
                    }
                } 
            })

            
            switch (state.filterBy) {
                case 'Active':  return activeList
                case 'Completed': return completedList
                default: return  state.toDoList
                    
            }
    }
  

}