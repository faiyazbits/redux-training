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
