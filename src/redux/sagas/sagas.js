import {
    all, call, takeLatest, takeEvery, put, select,
} from 'redux-saga/effects';
import {ADD_NEW_TEST_REQUEST, AUTH_USER_REQUEST, GET_ALL_ANSWERS_REQUEST, GET_ALL_TESTS_REQUEST} from "../constants";
import Service from "../../services/service";
import {addNewTestSuccess, authUserSuccess, getAllAnswersSuccess, getAllTestsSuccess} from "../actions/actions";

const service = new Service()

function* addNewTestRequest(payload) {
    try {
        console.log(payload)
        const data = yield call(service.createTest, payload);
        // alert(data)
        yield put(addNewTestSuccess(data))
        return data

    } catch (err) {}
}


function* authUserRequest(payload) {
    try {
        console.log("payload", payload.payload)
        const data = yield call(service.loginUser, payload);
        alert(data)
        yield put(authUserSuccess(data))
        return data

    } catch (err) {}
}

function* getAllTestsRequest() {
    try {
        const data = yield call(service.getAllTests);
        console.log('data data',data)
        yield put(getAllTestsSuccess(data))

    } catch (err) {}
}

function* getAllAnswersRequest(payload) {
    console.log(payload)
    try {
        const data = yield call(service.getAllAnswers, payload);
        console.log('rgegregrgre data',data)
        yield put(getAllAnswersSuccess(data))

    } catch (err) {}
}


const sagas = all([
    takeEvery(AUTH_USER_REQUEST, authUserRequest),
    takeEvery(ADD_NEW_TEST_REQUEST, addNewTestRequest),
    takeEvery(GET_ALL_TESTS_REQUEST, getAllTestsRequest),
    takeEvery(GET_ALL_ANSWERS_REQUEST, getAllAnswersRequest),
]);

export default sagas;