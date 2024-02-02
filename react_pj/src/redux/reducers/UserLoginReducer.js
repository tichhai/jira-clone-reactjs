import { USER_LOGIN } from "../../utils/constants/settingSystem"
import { USER_LOGIN_ACTION } from "../constants/Jira/JiraConstants"

let usLogin = {}
if(localStorage.getItem(USER_LOGIN)){
    usLogin = JSON.parse(localStorage.getItem(USER_LOGIN))
}
const stateDefault = {
    userLogin: usLogin
}

export const UserLoginReducer = (state = stateDefault, action) => {
    switch (action.type){
        case USER_LOGIN_ACTION:{
            return {...state, userLogin: action.userLogin}
        }
        default: return state;
    }
}