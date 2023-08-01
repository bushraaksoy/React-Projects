import * as actions from './ActionTypes'

const initialState = {
    loading: true,
    userList: [],
    userObj: {},
    errMessage: ''
}

export const Reducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.MAKE_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case actions.FAIL_REQUEST:
            return {
                ...state,
                loading: false,
                errMessage: action.payload
            }
        case actions.GET_USER_LIST:
            return {
                ...state,
                loading: false,
                errMessage: '',
                userList: action.payload,
                userObj: {}
            }
        case actions.DELETE_USER:
            return {
                ...state,
                loading: false,
            }
        case actions.ADD_USER:
            return {
                ...state,
                loading: false,
            }
        case actions.UPDATE_USER:
            return {
                ...state,
                loading: false,
            }
        case actions.GET_USER_OBJ:
            return {
                ...state,
                loading: false,
                userObj: action.payload
            }
        default:
            return {
                ...state
            }
    }
} 