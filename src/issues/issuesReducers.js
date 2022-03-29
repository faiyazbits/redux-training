import * as issuesActionTypes from './actionTypes'


let initialState ={
    issues:[],
    isIssuesLoading:{}
}
export default function issueReducer(state =initialState,action){
switch(action.type){
    case issuesActionTypes.SET_ISSUES:
        return {
            ...state,
            issues:[...action.payload.issues,state.issues]
        }

    case issuesActionTypes.ADD_ISSUE:
        return {
            ...state,
            issues:[...state.issues,action.payload.issue]
        }
    case  issuesActionTypes.REMOVE_ISSUE:
        return{
            ...state,
            issues:state.issues.filter((issue)=> issue.id !== action.payload.id)

        }
    default:
        return state
}
    
}