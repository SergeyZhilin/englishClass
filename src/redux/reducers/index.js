import {combineReducers} from "redux";
import testReducer from "./testReducer";
import userReducer from "./userReducer";
import questionReducer from "./questionReducer";

export default combineReducers({
    questions: questionReducer,
    tests: testReducer,
    users: userReducer
})