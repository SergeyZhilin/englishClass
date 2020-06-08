import createSagaMiddleware from "redux-saga";
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./redux/reducers";
import rootSaga from "./redux/sagas";

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

export default store