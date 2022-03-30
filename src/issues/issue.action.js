import { fetchIssuesApi } from '../api';
import * as actionTypes from './issue.actionType';




export function  fetchIssues(){
    return function (dispatch){ 
        dispatch(fetchIssuesloading())
        fetchIssuesApi().then((issues) => {
            dispatch(setIssues(issues))
        }) .catch((error)=>{
          dispatch(fetchIssuesFailure(error))
        })
    }
}
 export function fetchIssuesloading(){
     return {
         type:actionTypes.FETCH_ISSUES_LOADING
     }
 }


 export function setIssues(issues) {
    return {
        type: actionTypes.SET_ISSUES,
        payload: {
            issues
        }
    }
}
 export function fetchIssuesFailure(error){
     return{
         type:actionTypes.FETCH_ISSUES_FAILURE,
         payload: {
            error
        }
     }
 }

export function addIssue(issue) {
    return {
        type: actionTypes.ADD_ISSUE,
        payload: {
            issue
        }
    }
}




export function removeIssue(id) {
    return {
        type: actionTypes.REMOVED_ISSUE,
        payload: {
            id
        }
    }
}

export function updateIssue(issue) {
    return {
        type: actionTypes.UPDATE_ISSUE,
        payload: {
            issue
        }
    }
}
