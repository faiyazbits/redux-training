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