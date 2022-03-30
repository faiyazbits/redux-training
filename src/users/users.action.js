import { fetchUsersApi } from '../api';
import * as actionType from './users.actionType';

export function  fetchUsers(){
    return function (dispatch){  
        dispatch(fetchUserLoading())
        fetchUsersApi().then((users) => {
            dispatch(setUsers(users))
        }).catch((error)=>{
            dispatch(fetchUserFailure(error))
        })
    }
}
export function fetchUserLoading(){
   return{
       type:actionType.FETCH_USER_LOADING
   }
}

export function setUsers(users){
    return {
        type : actionType.SET_USERS,
        payload : { users }
    }
}


export function fetchUserFailure(error){
    return{
       type:actionType.FETCH_USER_FAILURE,
       payload: error
    }
}
 
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



