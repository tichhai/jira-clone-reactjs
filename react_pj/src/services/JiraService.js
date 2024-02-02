import  Axios  from "axios";
import { DOMAIN_JIRA } from "../utils/constants/settingSystem";

export const JiraService = {
    signinJira: (userLogin) => {
        return Axios({
            url: `${DOMAIN_JIRA}/users/signin`,
            method: 'POST',
            data: userLogin
        })
    }
}