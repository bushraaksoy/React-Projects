import { toast } from "react-toastify"
import * as actions from "./ActionTypes"
import axios from "axios"

export const makeRequest = () => {
    return {
        type: actions.MAKE_REQUEST
    }
}

export const failRequest = (err) => {
    return {
        type: actions.FAIL_REQUEST,
        payload: err
    }
}

export const getUserList = (data) => {
    return {
        type: actions.GET_USER_LIST,
        payload: data
    }
}

export const deleteUser = () => {
    return {
        type: actions.DELETE_USER,
    }
}

export const addUser = () => {
    return {
        type: actions.ADD_USER,
    }
}

export const updateUser = () => {
    return {
        type: actions.UPDATE_USER,
    }
}

export const getUserObj = (data) => {
    return {
        type: actions.GET_USER_OBJ,
        payload: data
    }
}

export const FetchUserList = () => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios.get('http://localhost:8000/user').then(res => {
            const userList = res.data;
            dispatch(getUserList(userList));
        }).catch(err => {
            dispatch(failRequest(err.message))
        })
    }
}

export const RemoveUser = (id) => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios.delete('http://localhost:8000/user/'+id).then(res => {
            dispatch(deleteUser());
        }).catch(err => {
            dispatch(failRequest(err.message))
        })
    }
}

export const FunctionAddUser = (data) => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios.post('http://localhost:8000/user',data).then(res => {
            dispatch(addUser());
            toast.success('User Added successfully')
        }).catch(err => {
            dispatch(failRequest(err.message))
        })
    }
}

export const FunctionUpdateUser = (data, code) => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios.put('http://localhost:8000/user/'+code ,data).then(res => {
            dispatch(updateUser());
            toast.success('User Updated successfully')
        }).catch(err => {
            dispatch(failRequest(err.message))
        })
    }
}

export const FetchUserObj = (code) => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios.get('http://localhost:8000/user/'+code).then(res => {
            const userList = res.data;
            dispatch(getUserObj(userList));
        }).catch(err => {
            dispatch(failRequest(err.message))
        })
    }
}