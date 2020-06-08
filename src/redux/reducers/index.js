import {
    ADD_NEW_TEST_ERROR,
    ADD_NEW_TEST_SUCCESS,
    AUTH_USER_REQUEST,
    AUTH_USER_SUCCESS,
    AUTH_USER_ERROR,
    GET_ALL_TESTS_SUCCESS, GET_ALL_ANSWERS_SUCCESS
} from '../constants'

const initialState = {
    allTests: [],
    allAnswers: []
}

 function rootReducer(state = initialState, action) {
    const {type, payload} = action
    switch (type) {
        case ADD_NEW_TEST_SUCCESS:
            return state
        case ADD_NEW_TEST_ERROR:
            return state
        case AUTH_USER_SUCCESS:
            return state

        case GET_ALL_TESTS_SUCCESS:
            return {
                ...state,
                allTests: payload
            }
        case GET_ALL_ANSWERS_SUCCESS:
            return {
                ...state,
                allAnswers: payload
            }

        default:
            return state
    }
}


export default rootReducer