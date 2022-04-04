import { fetchIssues } from '../api';
import * as actionTypes from './issue.actionType';
import { getBackLogIssues } from './issue.selectors';


export function getIssues(projectId) {
    return function (dispatch) {
        dispatch(setIssueLoadingStatus(true))
        return fetchIssues(projectId).then((res) => res.json())
            .then((response) => {
                dispatch(setIssues(response.issues))
            })
            .catch((error) => console.log(error))
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

export function updateIssue(updatedIssue) {
    return {
        type: actionTypes.UPDATE_ISSUE,
        payload: {
            updatedIssue
        }
    }
}


export function setIssueLoadingStatus(status) {
    return {
        type: actionTypes.SET_ISSUE_LOADING_STATUS,
        payload: {
            status
        }
    }
}
