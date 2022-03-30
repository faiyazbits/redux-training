import { fetchProjectsApi } from '../api';
import * as actionType from './project.actionType';


export function  fetchProjects(){
    return function (dispatch){
        dispatch(fetchProjectsLoading())
        fetchProjectsApi().then((projetcs) => {
            dispatch(setProjects(projetcs))
        }).catch((error)=>{
            dispatch(fetchProjectsFailure(error))
        })
    }
}

export function fetchProjectsLoading(){
    return {
        type:actionType.FETCH_PROJECT_LOADING
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


export function fetchProjectsFailure(error){
    return{
        type:actionType.FETCH_PROJECT_FAILURE,
        payload:{
            error
        }
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


