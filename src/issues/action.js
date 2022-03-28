import * as issuesActionTypes from './actionTypes'

export function setIssues(issues){
    return {
        type:issuesActionTypes.SET_ISSUES,
        payload:{
            issues
        }
    }
}


export function addIssue(issue){
    return {
        type:issuesActionTypes.ADD_ISSUE,
        payload:{
            issue
        }
    }
}

export function updateIssue(updatedIssue){
    return {
        type:issuesActionTypes.UPDATE_ISSUE,
        payload:{
            updatedIssue
        }
    }
}


export function removeIssue(id){
    return {
        type:issuesActionTypes.REMOVE_ISSUE,
        payload:{
            id
        }
    }
}