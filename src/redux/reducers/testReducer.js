import {
    ADD_NEW_TEST_ERROR,
    ADD_NEW_TEST_REQUEST,
    ADD_NEW_TEST_SUCCESS,
    GET_ALL_TESTS_SUCCESS,
    GET_ALL_TESTS_REQUEST, SUBMIT_DONE_TEST_SUCCESS,
} from '../constants'

const initialState = {
    allTests: [],
    loading: null,
    submitTest: false
}

function testReducer(state = initialState, action) {
    const {type, payload} = action

    switch (type) {
        case ADD_NEW_TEST_SUCCESS:
            return state

        case ADD_NEW_TEST_ERROR:
            return state

        case GET_ALL_TESTS_SUCCESS:
            return {
                ...state,
                allTests: payload,
                loading: false
            }
        case GET_ALL_TESTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case SUBMIT_DONE_TEST_SUCCESS:
            return {
                ...state,
                submitTest: true
            }

        default:
            return state
    }
}


export default testReducer