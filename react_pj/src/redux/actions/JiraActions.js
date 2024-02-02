import { USER_SIGNIN_SAGA } from "../constants/Jira/JiraConstants"

//gửi data lên local
export const signinAction = ({email, password}) => {
    return {
        type: USER_SIGNIN_SAGA,
        userLogin: {
            email,
            password
         }
    }
}