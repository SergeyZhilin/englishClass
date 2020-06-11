import {
    all, call, takeEvery, put,
} from 'redux-saga/effects';
import { push } from 'connected-react-router';

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
    getQuestionsByLevelSuccess, setPerson, submitDoneTestSuccess
} from "../actions/actions";

const service = new Service()

function* addNewTestRequest(payload) {
    try {
        const data = yield call(service.createTest, payload);
        yield put(addNewTestSuccess(data))
        return data

    } catch (err) {}
}


function* authUserRequest(payload) {
    try {
        const data = yield call(service.loginUser, payload);
        localStorage.setItem('user', data.id)
        yield put(authUserSuccess(data))
        yield put(push('/'))
    } catch (err) {}

}

function* getAllTestsRequest() {
    try {
        const data = yield call(service.getAllTests);
        yield put(getAllTestsSuccess(data))
        yield getPerson(data)

    } catch (err) {}
}

function* getAllAnswersRequest(payload) {
    try {
        const data = yield call(service.getAllAnswers, payload);
        yield put(getAllAnswersSuccess(data))

    } catch (err) {}
}


function* getPerson(allTests) {
    const person = allTests.find((person) => {
        return person.id === +localStorage.getItem('user')
    })
    yield put(setPerson(person))
}

function* getQuestionsByLevelRequest({payload}) {
    try {
        const data = yield call(service.getTestByLevel, payload);
        yield put(getQuestionsByLevelSuccess(data))
        localStorage.setItem('questionsCount', data.length )
    } catch (err) {}
}


function* submitDoneTestRequest({payload}) {
    try {
        const data = yield call(service.submitTest, payload);
        yield put(submitDoneTestSuccess(data))
        yield put( push('/results'))
        window.location.replace('/results')


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