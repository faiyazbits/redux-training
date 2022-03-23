import * as actionTypes from "./issue.actionType";

export function addIssue({ description,type}) {
  return {
    type: actionTypes.ADD_ISSUES,
    payload: {
      description,
      type
    },
  };
}
export function setIssue(issues) {
  return {
    type: actionTypes.SET_ISSUES,
    payload: {
      issues,
    },
  };
}
export function removeIssue(id) {
  return {
    type: actionTypes.REMOVED_ISSUES,
    payload: {
      id,
    },
  };
}
export function updateIssue(updatedIssue) {
  return {
    type: actionTypes.UPDATED_ISSUES,
    payload: {
      updatedIssue,
    },
  };
}
export function backlogIssue(status) {
  return {
    type: actionTypes.BACKLOG_ISSUES,
    payload: {
      status,
    },
  };
}
export function inprogressIssue(status) {
  return {
    type: actionTypes.INPROGRESS__ISSUES,
    payload: {
      status,
    },
  };
}
export function completedIssue(status) {
  return {
    type: actionTypes.COMPLETED_ISSUES,
    payload: {
      status,
    },
  };
}
export function selectedIssue(status) {
  return {
    type: actionTypes.SELECTED_ISSUES,
    payload: {
      status,
    },
  };
}
