import { ActionTypes } from "../constants/ActionTypes"

const initialState = {
    products: [{
        id: 1,
        title: "Dipesh",
        category: 'Programmer',
    }]
}

export const productReducer = (state, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
            break;
        default:
            return state;
            break; 
    }
}