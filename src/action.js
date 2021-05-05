// action creators

import * as actionTypes from './actionTypes';

export function addIssue(description){
    return {
        type: actionTypes.ADD_ISSUE,
        payload:{
            description
        }
    }
}

export function removeIssue(id){
    return {
        type: actionTypes.REMOVED_ISSUE,
        payload:{
            id
        }
    }

}

export function BugIssue(id){
    return {
        type: actionTypes.BUG_ISSUE,
        payload:{
            id
        }
    }

}
