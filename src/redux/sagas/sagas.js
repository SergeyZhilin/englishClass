import {
    all, call, takeLatest, takeEvery, put, select,
} from 'redux-saga/effects';
import {
    ADD_NEW_TEST_REQUEST,
    AUTH_USER_REQUEST,
    GET_ALL_ANSWERS_REQUEST,
    GET_ALL_TESTS_REQUEST,
    GET_QUESTIONS_BY_LEVEL_REQUEST, SUBMIT_DONE_TEST_REQUEST
} from "../constants";
import Service from "../../services/service";
import {
    addNewTestSuccess,
    authUserSuccess,
    getAllAnswersSuccess,
    getAllTestsSuccess,
    getQuestionsByLevelSuccess, submitDoneTestSuccess
} from "../actions/actions";

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
        const data = yield call(service.loginUser, payload);
        alert(data)
        yield put(authUserSuccess(data))
        return data

    } catch (err) {}
}

function* getAllTestsRequest() {
    try {
        const data = yield call(service.getAllTests);
        yield put(getAllTestsSuccess(data))

    } catch (err) {}
}

function* getAllAnswersRequest(payload) {
    try {
        const data = yield call(service.getAllAnswers, payload);
        console.log('DATA' ,data)
        // const answersParse = JSON.parse(data)
        // console.log('answersParse', answersParse)
        yield put(getAllAnswersSuccess(data))

    } catch (err) {}
}

function* getQuestionsByLevelRequest({payload}) {
    try {
        const data = yield call(service.getTestByLevel, payload);
        yield put(getQuestionsByLevelSuccess(data))

    } catch (err) {}
}


function* submitDoneTestRequest({payload}) {
    try {
        const data = yield call(service.submitTest, payload);
        yield put(submitDoneTestSuccess(data))

    } catch (err) {}
}

const sagas = all([
    takeEvery(AUTH_USER_REQUEST, authUserRequest),
    takeEvery(ADD_NEW_TEST_REQUEST, addNewTestRequest),
    takeEvery(GET_ALL_TESTS_REQUEST, getAllTestsRequest),
    takeEvery(GET_ALL_ANSWERS_REQUEST, getAllAnswersRequest),
    takeEvery(GET_QUESTIONS_BY_LEVEL_REQUEST, getQuestionsByLevelRequest),
    takeEvery(SUBMIT_DONE_TEST_REQUEST, submitDoneTestRequest),
]);

export default sagas;