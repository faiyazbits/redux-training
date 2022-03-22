import * as actionTypes from './project.actionType';

export function addProjects(description) {
    return {
        type: actionTypes.ADD_PROJECT,
        payload: {
            description
        }
    }
}

export function removeProject(id) {
    return {
        type: actionTypes.REMOVED_PROJECT,
        payload: {
            id
        }
    }
}



export function selectProject(id) {
    return {
        type: actionTypes.SELCTE_PROJECT,
        payload: {
            id
        }
    }
}
