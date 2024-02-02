import { USER_LOGIN_ACTION } from "../constants/Jira/JiraConstants"

//lưu data vào store
export const UserLoginAction  = (data) => {
    return {
        type: USER_LOGIN_ACTION,
        userLogin: data
    }
}