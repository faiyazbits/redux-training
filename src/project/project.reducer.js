import * as actionTypes from "./project.actionType";

const initialState = {
  projects: [],
  activeProject: {},
  isProjectLoading: false,
  error: "",
};
export default function projectReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_PROJECT:
      return {
        ...state,
        projects: [
          ...state.projects,
          {
            name: action.payload.name,
            url: action.payload.url,
            description: action.payload.description,
          },
        ],
      };

    case actionTypes.REMOVED_PROJECT:s
      return {
        ...state,
        projects: state.projects.filter(
          (project) => project.id != action.payload.id
        ),
      };

    case actionTypes.FETCH_PROJECT_LOADING:
      return {
        ...state,
        isProjectLoading: true,
      };


      case actionTypes.SET_PROJECTS:
      return {
        ...state,
        isProjectLoading: false,
        projects: action.payload.projects,
        error: "",
      };

    case actionTypes.FETCH_PROJECT_FAILURE:
      return {
        ...state,
        isProjectLoading: false,
        projects: [],
        error: action.payload.projects,
      };
    
    case actionTypes.UPDATE_PROJECT:
      return {
        ...state,
        projects: state.projects.map((project) => {
          if (action.payload.updatedProject.id == project.id) {
            return {
              ...action.payload.updatedProject,
            };
          }
          return project;
        }),
      };
    case actionTypes.SET_ACTIVE_PROJECT:
      return {
        ...state,
        activeProject: action.payload.activeProject,
      };

    default:
      return state;
  }
}
