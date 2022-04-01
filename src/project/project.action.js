import { fetchProjectsApi } from '../api';
import * as actionType from './project.actionType';


export function fetchProjects(){
    return function(dispatch){
        dispatch(setProjectLoading(true));
        fetchProjectsApi().then((projects) => {
            dispatch(setProjects(projects))
            dispatch(setProjectLoading(false));
        })
    }
}
export function addProject(newProject) {
    return {
        type: actionType.ADD_PROJECT,
        payload: {
           project:newProject
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

export function setProjectLoading(isLoading) {
    return {
        type: actionType.SET_PROJECT_LOADING,
        payload: {
            isLoading
        }
    }
}