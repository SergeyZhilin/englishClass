import createSagaMiddleware from "redux-saga";
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./redux/reducers";
import rootSaga from "./redux/sagas";
import { routerMiddleware } from 'connected-react-router'
import {createBrowserHistory} from "history";

export const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware,
    routerMiddleware(history)
    ),

)

sagaMiddleware.run(rootSaga)

export default store