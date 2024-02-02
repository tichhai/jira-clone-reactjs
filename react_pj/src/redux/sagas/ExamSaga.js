import {
  call,
  put,
  takeLatest,
} from "redux-saga/effects";
import { GET_API } from "../constants/reduxSagaExamConstants";
import { examService } from "../../services/ExamService";
import {STATUS_CODE} from '../../utils/constants/settingSystem'

// function* getTaskApi(action){
//     while(true){
//         yield take(GET_API);// truyền vào type, khi dispatch({type: GET_API}) sẽ gọi vào, nhưng vì gọi có 1 lần sẽ qua yield khác nên phải cho vào infinity loop
//         console.log('getTaskApi')
//     }
// }

//dispatch action của saga chứ k phải action thường(type của action saga), sau đó put action thường, còn redux-thunk là bọc dsipatch action thunk, sau đó dispatch action thường
//dispatch({type: GET_API}) action là object chứa type
function* getTaskApi2(action) {
  try {
    //call nhận 1 func trả về 1 promise, chứ ko nhận trực tiếp 1 promise nên ko gọi hàm, tương tự redux-thunk chờ promise thành công mới xử lí tiếp
    const { data, status } = yield call(examService.getTaskApi);
    if (status === STATUS_CODE.SUCCESS) {
      //dispatch giống redux-thunk
      yield put({
        type: "type của action thường",
        taskList: data,
      });
    } else {
      console.log("err");
    }
  } catch (err) {
    console.log(err);
  }
}

export function* ExamSaga() {
  // yield fork(getTaskApi);// hàm bất đồng bộ, chạy 1 lần song song chạy hết
  // khi chạy rootSaga sẽ chạy vào hàm đó, giống như khởi động store, gặp take sẽ dừng
  // yield takeEvery(GET_API, getTaskApi2);//kết hợp giữa take và fork
  yield takeLatest(GET_API, getTaskApi2); //click 10 lần chỉ làm 1 lần cuối cùng
}

//mỗi 1 chức năng là 1 cặp xử lí và theo dõi, nhớ thêm vào rootSaga
// function* addTask(action) {
  
// }

// export function* ExamTheoDoiAddTaskSaga() {
//   yield takeLatest(ADD_TASK, addTask);
// }
