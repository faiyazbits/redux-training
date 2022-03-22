import * as actionTypes from './users.actionType';


export function addUsers(description) {
    return {
        type: actionTypes.ADD_USER,
        payload : {description}
        
    }
}

export function removeUser(id) {
    return {
        type: actionTypes.REMOVED_USER,
        payload: {
            id
        }
    }
}

export function updateUser(id){
    return {
        type : actionTypes.UPDATE_USER,
        payload : {id}
    }
}

export function setCurrentUser(id){
    return {
        type : actionTypes.CURRENT_USER,
        payload : {id}
    }
}



