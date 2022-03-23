import * as actionTypes from "./project.actionType";

export function addProject({description,name,url}) {
  return {
    type: actionTypes.ADD_PROJECTS,
    payload: {
      description,
      name,
      url
    },
  };
}

export function setProjects(projects) {
  return {
    type: actionTypes.SET_PROJECTS,
    payload: {
      projects,
    },
  };
}
export function removeProject(id) {
  return {
    type: actionTypes.REMOVED_PROJECTS,
    payload: {
      id,
    },
  };
}
export function updatedProject(updatedProject) {
  return {
    type: actionTypes.UPDATED_PROJECTS,
    payload: {
      updatedProject,
    },
  };
}
