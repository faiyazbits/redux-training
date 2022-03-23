import * as actionType from './users.actionType';


export function addUser(name,email) {
    return {
        type: actionType.ADD_USER,
        payload : {name,email}
        
    }
}

export function removeUser(id) {
    return {
        type: actionType.REMOVED_USER,
        payload: {
            id
        }
    }
}

export function updateUser(updateUser){
    return {
        type : actionType.UPDATE_USER,
        payload : {updateUser}
    }
}

export function setCurrentUser(currentUser){
    return {
        type : actionType.CURRENT_USER,
        payload : { currentUser }
    }
}

export function setUsers(users){
    return {
        type : actionType.SET_USERS,
        payload : { users }
    }
}


