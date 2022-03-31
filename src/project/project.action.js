import * as actionType from './project.actionType';
import { fetchProjects } from '../api';
import store from '../store';

export function addProject(name, description, url) {
    return {
        type: actionType.ADD_PROJECT,
        payload: {
            name,
            description,
            url
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

export function setProjectLoadingStatus(status) {
    return {
        type: actionType.SET_PROJECT_LOADING_STATUS,
        payload: {
            status
        }
    }
}





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