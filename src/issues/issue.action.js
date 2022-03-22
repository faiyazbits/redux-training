import * as actionTypes from './issue.actionType';


export function addIssues(description) {
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

export function updateIssue(id) {
    return {
        type: actionTypes.UPDATE_ISSUE,
        payload: {
            id
        }
    }
}

export function addBacklogIssue(status){
    return {
        type : actionTypes.BACKLOG_ISSUE,
        payload:{
            status
        }
    }
}
export function addSelectedIssue(status){
    return {
        type : actionTypes.SELECTED_ISSUE,
        payload:{
            status
        }
    }
}

export function addInProgressIssue(status){
    return {
        type : actionTypes.INPROGRESS_ISSUE,
        payload:{
            status
        }
    }
}
export function addCompletedIssue(status){
    return {
        type : actionTypes.COMPLETED_ISSUE,
        payload:{
            status
        }
    }
}