import {createAction} from 'redux-actions';
import {
    ADD_NEW_TEST_ERROR,
    ADD_NEW_TEST_REQUEST, ADD_NEW_TEST_SUCCESS,
    AUTH_USER_ERROR,
    AUTH_USER_REQUEST,
    AUTH_USER_SUCCESS,
    GET_ALL_ANSWERS_ERROR,
    GET_ALL_ANSWERS_REQUEST,
    GET_ALL_ANSWERS_SUCCESS,
    GET_ALL_LEVELS_ERROR,
    GET_ALL_LEVELS_REQUEST,
    GET_ALL_LEVELS_SUCCESS,
    GET_ALL_TESTS_ERROR,
    GET_ALL_TESTS_REQUEST,
    GET_ALL_TESTS_SUCCESS,
    GET_QUESTIONS_BY_LEVEL_ERROR,
    GET_QUESTIONS_BY_LEVEL_REQUEST,
    GET_QUESTIONS_BY_LEVEL_SUCCESS,
    PUT_USER,
    SET_PERSON,
    SET_QUESTION_WITH_ANSWER,
    SUBMIT_DONE_TEST_ERROR,
    SUBMIT_DONE_TEST_REQUEST,
    SUBMIT_DONE_TEST_SUCCESS
} from '../constants'

export const authUserRequest = createAction(AUTH_USER_REQUEST)
export const authUserSuccess = createAction(AUTH_USER_SUCCESS)
export const authUserError = createAction(AUTH_USER_ERROR)
export const addNewTestRequest = createAction(ADD_NEW_TEST_REQUEST)
export const addNewTestSuccess = createAction(ADD_NEW_TEST_SUCCESS)
export const addNewTestError = createAction(ADD_NEW_TEST_ERROR)
export const getAllTestsRequest = createAction(GET_ALL_TESTS_REQUEST)
export const getAllTestsSuccess = createAction(GET_ALL_TESTS_SUCCESS)
export const getAllLevelsRequest = createAction(GET_ALL_LEVELS_REQUEST)
export const getAllLevelsSuccess = createAction(GET_ALL_LEVELS_SUCCESS)
export const getAllLevelsError = createAction(GET_ALL_LEVELS_ERROR)
export const getAllTestsError = createAction(GET_ALL_TESTS_ERROR)
export const getAllAnswersRequest = createAction(GET_ALL_ANSWERS_REQUEST)
export const getAllAnswersError = createAction(GET_ALL_ANSWERS_ERROR)
export const getAllAnswersSuccess = createAction(GET_ALL_ANSWERS_SUCCESS)
export const getQuestionsByLevelRequest = createAction(GET_QUESTIONS_BY_LEVEL_REQUEST)
export const getQuestionsByLevelSuccess = createAction(GET_QUESTIONS_BY_LEVEL_SUCCESS)
export const getQuestionsByLevelError = createAction(GET_QUESTIONS_BY_LEVEL_ERROR)
export const submitDoneTestRequest = createAction(SUBMIT_DONE_TEST_REQUEST)
export const submitDoneTestSuccess = createAction(SUBMIT_DONE_TEST_SUCCESS)
export const submitDoneTestSError = createAction(SUBMIT_DONE_TEST_ERROR)
export const setQuestionWithAnswer = createAction(SET_QUESTION_WITH_ANSWER)
export const setPerson = createAction(SET_PERSON)
export const putUser = createAction(PUT_USER)
