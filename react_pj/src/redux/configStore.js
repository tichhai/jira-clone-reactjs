import {  configureStore } from "@reduxjs/toolkit";
//redux toolkit có sẵn redux thunk
import createMiddleWareSaga from "redux-saga";
import { rootSaga } from "./sagas/rootSaga";
import {LoadingReducer} from './reducers/LoadingReducer'
import {UserLoginReducer} from './reducers/UserLoginReducer'

const middleWareSaga = createMiddleWareSaga();
const store = configureStore(
    { reducer: {LoadingReducer, UserLoginReducer} ,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleWareSaga)
    }
    );
middleWareSaga.run(rootSaga);
export default store;
