import * as actionType from './project.actionType';

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


export function fetchProjects(projects){
    return{
        type:actionType.FETCH_PROJECTS,
        payload:{
            projects
        }
    }
}