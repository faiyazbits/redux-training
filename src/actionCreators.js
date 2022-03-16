import * as actionTypes from './actionTypes'

export function addIssue(description) {
    return {
        type: actionTypes.ISSUE_ADDED,
        payload: {
            description: description
        }
    }
}

export function removeIssue(id) {
    return {
        type: actionTypes.ISSUE_REMOVED,
        payload: {
            id
        }
    }
}

export function resolveIssue(id) {
    return {
        type: actionTypes.ISSUE_RESOLVED,
        payload: {
            id
    
        }
    }
}