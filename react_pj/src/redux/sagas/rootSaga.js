import {all} from 'redux-saga/effects'
// import * as Exam from './ExamSaga';
import * as Jira from './Jira/UserJiraSaga'

export function* rootSaga(){
    yield all([
        // Exam.ExamSaga(),
        // Exam.ExamTheoDoiAddTaskSaga()
        Jira.signinSagaTracking(),
    ])
}