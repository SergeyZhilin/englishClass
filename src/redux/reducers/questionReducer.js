import {
    GET_ALL_ANSWERS_SUCCESS,
    GET_QUESTIONS_BY_LEVEL_SUCCESS,
    SET_QUESTION_WITH_ANSWER,
    GET_ALL_LEVELS_SUCCESS,
    GET_QUESTIONS_BY_LEVEL_REQUEST, GET_ALL_ANSWERS_REQUEST
} from '../constants'

const initialState = {
    allAnswers: {},
    questionsByLevel: [],
    questionWithAnswer: {},
    levels: null,
    loading: null
}

function questionReducer(state = initialState, action) {
    const {type, payload} = action

    switch (type) {
        case GET_ALL_LEVELS_SUCCESS:
            return {
                ...state,
                levels: payload
            }
        case GET_ALL_ANSWERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_ALL_ANSWERS_SUCCESS:
            // const data = Object.setPrototypeOf(state.allAnswers, payload)
            const data = Object.setPrototypeOf(state.allAnswers, payload)
            console.log('payload', payload)
            return {
                ...state,
                allAnswers: data,
                loading: false
            }
        case GET_QUESTIONS_BY_LEVEL_SUCCESS:
            return {
                ...state,
                questionsByLevel: payload,
                loading: false,
            }
        case GET_QUESTIONS_BY_LEVEL_REQUEST:
            return {
                ...state,
                loading: true
            }
        case SET_QUESTION_WITH_ANSWER:
            return {
                ...state,
                questionWithAnswer: {...state.questionWithAnswer, ...payload}
            }
        default:
            return state
    }
}


export default questionReducer