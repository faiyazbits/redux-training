import { fetchUsersApi } from '../api';
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


export function setUserLoadding(isLoading){
    return{
        type: actionType.USER_LOADING_STATUS,
        payload:{
            isLoading
        }
    }
    }
    
    
    export function fetchUsers() {
        return function (dispatch) {
            dispatch(setUserLoadding(true))
            return fetchUsersApi().then((res) => res.json())
                .then((response) => dispatch(setUsers(response.users)),
                    (error) => console.log(error, 'error thrown'),
                )
        }
    }

