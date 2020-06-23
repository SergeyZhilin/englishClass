import createSagaMiddleware from "redux-saga";
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./redux/reducers";
import rootSaga from "./redux/sagas";
import { routerMiddleware } from 'connected-react-router'
import {createBrowserHistory} from "history";
import { composeWithDevTools } from 'redux-devtools-extension'


export const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    rootReducer,
    composeWithDevTools(
    applyMiddleware(sagaMiddleware,
    routerMiddleware(history))
    ),
)

sagaMiddleware.run(rootSaga)

export default store