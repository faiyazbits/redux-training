import * as actionTypes from './project.actionType';



const initialState = {
  projects: [],
  activeProject: {},
  isProjectLoading: false,
};
export default function projectReducer(state = initialState, action) {

    switch (action.type) {
        case actionTypes.ADD_PROJECT:
            return {
                ...state,
                projects: [...state.projects, { ...action.payload.project}]
            }

        case actionTypes.REMOVE_PROJECT:
            return {
               ...state,
                projects: state.projects.filter(project => project.id != action.payload.id)
            }

        case actionTypes.SET_PROJECTS:
            return {
                ...state,
                isProjectLoading:false,
                projects: action.payload.projects
            }

        case actionTypes.UPDATE_PROJECT:
            return {
                ...state,
                projects: state.projects.map((project) => {
                    if (action.payload.updatedProject.id == project.id) {
                        return {
                            ...action.payload.updatedProject
                        }
                    }
                    return project;
                })
            }
        case actionTypes.SET_ACTIVE_PROJECT:
            return {
                ...state,
                activeProject: action.payload.activeProject
            }
        case actionTypes.SET_PROJECT_LOADING_STATUS:
            return {
                ...state,
                isProjectLoading:action.payload.status
            }

        default:
            return state;
    }
}