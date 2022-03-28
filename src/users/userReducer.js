import * as userActionTypes from "./actionTypes"

SET_CURRENT_USER

const initialState = {
    users:[],
    currentUser:{},
    isUserLoding:false
}


export default function userReducer(state = initialState,action){
    switch(action.type){
        case userActionTypes.SET_USERS:
            return {
                ...state,
                users:action.payload.users
            }
        case userActionTypes.ADD_USER:
            return {
                ...state,
                users:[...users,{name:action.payload.name,email:action.payload.email}]
            }
        case userActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser:action.payload.currentUser
            }
        case userActionTypes.UPDATE_USER:
            return{
                ...state,
                users:state.users.map((user)=>{
                    if(user.id == action.payload.updatedUser.id){
                        return {
                            ...action.payload.updatedUser
                        }
                    }
                    return user
                })
            }
        case userActionTypes.REMOVE_USER:
            return{
                ...state,
                users:state.users.filter((user)=>{
                    return user.id !== action.payload.id
                })
            }
    }
}