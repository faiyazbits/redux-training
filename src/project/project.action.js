import * as actionType from './project.actionType';
import { fetchProjects } from '../api';



export function getProjects() {
    return function (dispatch) {
        dispatch(setProjectLoadingStatus(true))
        return fetchProjects().then((res) => res.json())
            .then((response) => {
                dispatch(setProjects(response.projects))
            })
            .catch((error) => console.log(error))
    }
}

export function setProjectLoadingStatus(status) {
    return {
        type: actionType.SET_PROJECT_LOADING_STATUS,
        payload: {
            status
        }
    }
}

export function setProjects(projects) {
    return {
        type: actionType.SET_PROJECTS,
        payload: {
            projects
        }
    }
}

export function addProject(newProject) {
    return {
        type: actionType.ADD_PROJECT,
        payload: {
            project: newProject
        }
    }
}


export function setActiveProject(activeProject) {
    return {
        type: actionType.SET_ACTIVE_PROJECT,
        payload: {
            activeProject
        }
    }
}

export function removeProject(id) {
    return {
        type: actionType.REMOVE_PROJECT,
        payload: {
            id
        }
    }
}



export function updateProject(updatedProject) {
    return {
        type: actionType.UPDATE_PROJECT,
        payload: {
            updatedProject
        }
    }
}









