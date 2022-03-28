
import * as projectsActionTypes from './actionTypes'


export function setProjects(projects){
    return {
        type: projectsActionTypes.SET_PROJECTS,
    payload: {
       projects
    }
}
}

export function addProject(project){
    return {
        type: projectsActionTypes.ADD_PROJECT,
    payload: {
        project
    }
}
}

export function updateProject(updatedProject){
    return {
        type: projectsActionTypes.UPDATE_PROJECT,
    payload: {
        updatedProject
    }
}
}
export function removeProject(id){
    return {
        type: projectsActionTypes.REMOVE_PROJECT,
    payload: {
        id
    }
}
}


export function setActiveProject(activeProject){
    return {
        type:projectsActionTypes.SET_ACTIVE_PROJECT,
        payload:{
            activeProject
        }
    }
}