import * as actionsTypes from "./project.actionType";





const initialState = {
  projects: [],
  activeProject: {},
  isProjectLoading: false,
};

export default function projectReducer(state = initialState, action) {
  switch (action.type) {
    case actionsTypes.ADD_PROJECTS:
      return {
        ...state,
        projects: [...state.projects, action.payload.project],
      };

    case actionsTypes.SET_PROJECTS:
      return {
        ...state,
        isProjectLoading: false,
        projects: action.payload.projects,
      };

    case actionsTypes.REMOVED_PROJECTS:
      return {
        ...state,
        projects: state.projects.filter((project) =>project.id == action.payload.id),
      };

    case actionsTypes.UPDATED_PROJECTS:
      return state.projects.map((projects) => {
        if (projects.id == action.payload.id) {
          return {
            ...projects,
          };
        } else {
          return projects;
        }
      });

    default:
      return state;
  }
}

