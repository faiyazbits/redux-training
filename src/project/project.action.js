import { fetchProjectsApi } from '../api';
import store from '../store';
import * as actionType from './project.actionType';

export function addProject(project) {
    return {
        type: actionType.ADD_PROJECT,
        payload: {
            project
        }
    }
}

export function removeProject(id) {
    return {
        type: actionType.REMOVED_PROJECT,
        payload: {
            id
        }
    }
}

export function setProjectLoadding(isLoading) {
    return {
        type: actionType.PROJECT_LOADING_STATUS,
        payload: {
            isLoading
        }
    }
}


export function fetchProjects() {
    return function (dispatch) {
        dispatch(setProjectLoadding(true))
        return fetchProjectsApi().then((res) => res.json())
            .then((response) => dispatch(setProjects(response.projects)),
                (error) => console.log(error, 'error thrown'))
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

export function updatedProject(updatedProject) {
    return {
        type: actionType.UPDATE_PROJECT,
        payload: {
            updatedProject
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

