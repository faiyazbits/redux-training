
import * as projectsActionTypes from './actionTypes'
const initialState = {
    projects:[],
    selectedProject:{},
    isLoading:false
}


export default function projectReducer(state = initialState,action){
switch(action.type){
    case projectsActionTypes.SET_PROJECTS:
        return {
            ...state,
            projects:[...state.projects,action.payload.projects]
        }
    case projectsActionTypes.ADD_PROJECT:
        return {
            ...state,
            projects:[...state.projects,{name:action.payload.name,url:action.payload.url,description:action.payload.description}]
        }
        
    case projectsActionTypes.SET_ACTIVE_PROJECT:
        return{
            ...state,
            selectedProject:action.payload.activeProject
        }
    case projectsActionTypes.UPDATE_PROJECT:
        return{
            ...state,
            projects:state.projects.map((project)=>{
                if(project.id == action.payload.updatedProject.id){
                    return {
                        ...action.payload.updatedProject
                    }
                }
                return project
            })
        }  

    case projectsActionTypes.REMOVE_PROJECT:
        return{
            ...state,
            projects:state.projects.filter((project)=>{
                return project.id !== action.payload.is
            })
        }
        default:
            return state
}   
}