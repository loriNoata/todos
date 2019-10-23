import {HANDLE_SUBMIT_LOGIN, HANDLE_SUBMIT_LOGOUT} from './const'; 

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
 
 
