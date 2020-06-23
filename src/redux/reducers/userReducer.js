import {
    AUTH_USER_SUCCESS,
    SET_PERSON,
    PUT_USER,
} from '../constants'

const initialState = {
    user: null,
    person: null,
    userAnswer: null,
}

function userReducer(state = initialState, action) {
    const {type, payload} = action

    switch (type) {
        case AUTH_USER_SUCCESS:
            console.log(payload)
            return {
                ...state,
                user: {...payload, answers: null}
            }
        case PUT_USER:
            return {
                ...state,
                userAnswer: payload.user
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


export default userReducer