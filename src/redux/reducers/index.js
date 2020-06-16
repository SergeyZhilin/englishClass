import {
    ADD_NEW_TEST_ERROR,
    ADD_NEW_TEST_SUCCESS,
    AUTH_USER_SUCCESS,
    GET_ALL_TESTS_SUCCESS,
    GET_ALL_ANSWERS_SUCCESS,
    GET_QUESTIONS_BY_LEVEL_SUCCESS,
    SET_QUESTION_WITH_ANSWER,
    SET_PERSON,
    PUT_USER
} from '../constants'

const initialState = {
    allTests: [],
    allAnswers: {},
    questionsByLevel: [],
    questionWithAnswer: {},
    user: null,
    person: null,
    userAnswer: null
}

 function rootReducer(state = initialState, action) {
    const {type, payload} = action

    switch (type) {
        case ADD_NEW_TEST_SUCCESS:
            return state
        case ADD_NEW_TEST_ERROR:
            return state

        case AUTH_USER_SUCCESS:
            return {
                ...state,
                user: payload
            }

        case GET_ALL_TESTS_SUCCESS:
            return {
                ...state,
                allTests: payload
            }

        case GET_ALL_ANSWERS_SUCCESS:
            const obj = Object.setPrototypeOf(state.allAnswers, payload );
            return {
                ...state,
                allAnswers: obj
            }

        case PUT_USER:
            return {
                ...state,
                userAnswer: payload.user
            }
        case GET_QUESTIONS_BY_LEVEL_SUCCESS:
            return {
                ...state,
                questionsByLevel: payload
            }
        case SET_QUESTION_WITH_ANSWER:
            return {
                ...state,
                questionWithAnswer: { ...state.questionWithAnswer, ...payload }
            }
        case SET_PERSON:
            return {
                ...state,
                person: payload
            }

        default:
            return state
    }
}


export default rootReducer