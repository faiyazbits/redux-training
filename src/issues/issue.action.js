import { fetchIssuesApi } from '../api';
import * as actionTypes from './issue.actionType';



export function fetchIssues(projectId){
    return function(dispatch){
        dispatch(setIssueLoading(true));
        fetchIssuesApi(projectId).then((projects) => {
            dispatch(setIssues(projects))
            dispatch(setIssueLoading(false));
        })
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


export function setIssues(issues) {
    return {
        type: actionTypes.SET_ISSUES,
        payload: {
            issues
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

export function setIssueLoading(isLoading) {
    return {
        type: actionTypes.SET_ISSUES_LOADING,
        payload: {
            isLoading
        }
    }
}
