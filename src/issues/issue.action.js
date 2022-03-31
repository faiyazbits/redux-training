import { fetchIssuesApi } from '../api';
import * as actionTypes from './issue.actionType';


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


export function setIssueLoadding(isLoading) {
    return {
        type: actionTypes.ISSUE_LOADING_STATUS,
        payload: {
            isLoading
        }
    }
}


export function fetchIssues() {
    return function (dispatch) {
        dispatch(setIssueLoadding(true))
        return fetchIssuesApi().then((res) => res.json())
            .then((response) => dispatch(setIssues(response.issues)), 
                (error) => console.log(error, 'error thrown'),
                )
    }
}