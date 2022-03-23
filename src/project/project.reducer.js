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
                projects: [...state.projects, { name: action.payload.name, url: action.payload.url, description: action.payload.description }]
            }

        case actionTypes.REMOVED_PROJECT:
            return {
                ...state,
                projects: state.projects.filter(project => project.id != action.payload.id)
            }

        case actionTypes.SET_PROJECTS:
            return {
                ...state,
                isProjectLoading: false,
                projects: action.payload.projects
            }

        case actionTypes.UPDATED_PROJECT:
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


        default:
            return state;
    }
}