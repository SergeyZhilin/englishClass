import {
    ADD_NEW_TEST_ERROR,
    ADD_NEW_TEST_REQUEST,
    ADD_NEW_TEST_SUCCESS,
    AUTH_USER_REQUEST,
    AUTH_USER_SUCCESS,
    GET_ALL_ANSWERS_ERROR,
    GET_ALL_ANSWERS_REQUEST, GET_ALL_ANSWERS_SUCCESS,
    GET_ALL_TESTS_ERROR,
    GET_ALL_TESTS_REQUEST,
    GET_ALL_TESTS_SUCCESS
} from '../constants'

export const authUserRequest = (payload) => {
    return {
        type: AUTH_USER_REQUEST,
        payload
    }
}

export const authUserSuccess = (payload) => {
    return {
        type: AUTH_USER_SUCCESS,
        payload
    }
}

export const addNewTestRequest = (payload) => {
    console.log('add ', payload)
    return {
        type: ADD_NEW_TEST_REQUEST,
        payload
    }
}

export const addNewTestSuccess = (payload) => {
    return {
        type: ADD_NEW_TEST_SUCCESS,
        payload
    }
}

export const addNewTestError = () => {
    return {
        type: ADD_NEW_TEST_ERROR,
    }
}

export const getAllTestsRequest = () => {
    return {
        type: GET_ALL_TESTS_REQUEST,
    }
}


export const getAllTestsSuccess= (payload) => {
    return {
        type: GET_ALL_TESTS_SUCCESS,
        payload
    }
}

export const getAllAnswersRequest = (payload) => {
    return {
        type: GET_ALL_ANSWERS_REQUEST,
        payload
    }
}

export const getAllAnswersError = (payload) => {
    return {
        type: GET_ALL_ANSWERS_ERROR,
        payload
    }
}

export const getAllAnswersSuccess = (payload) => {
    return {
        type: GET_ALL_ANSWERS_SUCCESS,
        payload
    }
}