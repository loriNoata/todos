const initialState = {
    inputName : '', 
    inputPassword: '', 
    loggedIn : false
}

const LogginReducer = (state = initialState, action) => {
    console.log(action); 
     switch (action.type) {
        case "HANDLE_SUBMIT_LOGIN" : 
            return {
                ...state, 
                inputName: action.inputName, 
                inputPassword: action.inputPassword, 
                loggedIn : true 
            }

        case "HANDLE_SUBMIT_LOGOUT" : 
            console.log("log ---- out@@@@ action :: ", action);
            return {
                ...state, 
                loggedIn : false
            }

        default:  return state
    }
}

export default LogginReducer; 