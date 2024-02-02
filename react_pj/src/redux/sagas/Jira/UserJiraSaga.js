import {
  call,
  delay,
  put,
  takeLatest,
} from "redux-saga/effects";
import { USER_SIGNIN_SAGA } from "../../constants/Jira/JiraConstants";
import { JiraService } from "../../../services/JiraService";
import {  TOKEN, USER_LOGIN } from "../../../utils/constants/settingSystem";
import { DISPLAY_LOADING, HIDE_LOADING } from "../../constants/LoadingConstants";
import {UserLoginAction} from '../../actions/UserLoginActions'

export function* signinSaga(action) {
    yield put({
        type: DISPLAY_LOADING
    })
    yield delay(500)
    try{
        const {data} =  yield call(() => JiraService.signinJira(action.userLogin))
        localStorage.setItem(TOKEN, data.content.accessToken)
        localStorage.setItem(USER_LOGIN,JSON.stringify(data.content))
        //gọi để set dữ liệu lại khi login lại và lưu data vào store để khi reset thì ko mất data (redux khi reset sẽ mất data)
        yield put(UserLoginAction(data.content));
        History.navigate('/home')
    }catch(err){
        console.log(err)
    }
    yield put({
        type: HIDE_LOADING
    })
}
export function* signinSagaTracking() {
  yield takeLatest(USER_SIGNIN_SAGA, signinSaga);
}
