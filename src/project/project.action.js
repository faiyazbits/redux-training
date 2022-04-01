import { fetchProjectsApi } from '../api';
import * as actionType from './project.actionType';


export function fetchProjects(){
    return function(dispatch){
        fetchProjectsApi().then((projects) => {
            dispatch(setProjects(projects))
        })
    }
}
export function addProject(name,description,url) {
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