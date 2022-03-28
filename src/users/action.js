
import * as userActionTypes from './actionTypes'

export function setCurrentUser(currentUser){
    return {
        type: userActionTypes.SET_CURRENT_USER,
    payload: {
        currentUser
    }
}
}

export function setUsers(users){
    return {
        type: userActionTypes.SET_USERS,
    payload: {
        users
    }
}
}


export function addUser(name,email){
    return {
        type: userActionTypes.ADD_USER,
    payload: {
        name,
        email
    }
}
}


export function updateUser(updatedUser){
    return {
        type: userActionTypes.UPDATE_USER,
    payload: {
        updatedUser
    }
}
}

export function removeUser(id){
    return {
        type: userActionTypes.REMOVE_USER,
    payload: {
       id
    }
}
}