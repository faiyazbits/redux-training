// action creators

import * as actionTypes from './actionTypes';

export function addIssue(description) {
    return {
        type: actionTypes.ADD_ISSUE,
        payload: {
            description
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

export function resolveIssue(id) {
    return {
        type: actionTypes.RESOLVED_ISSUE,
        payload: {
            id

        }
    }
}
export function updateIssue(id) {
    return {
        type: actionTypes.UPDATE_ISSUE,
        payload: {
            id
        }
    }
}
