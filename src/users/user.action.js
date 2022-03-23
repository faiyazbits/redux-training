import * as actionTypes from "./user.actionType";

export function addUser({id,name}) {
  return {
    type: actionTypes.ADD_USERS,
    payload: {
      id,
      name
    },
  };
}

export function updateUser(updatedUser) {
  return {
    type: actionTypes.UPDATED_USERS,
    payload: {
      updatedUser,
    },
  };
}

export function setCurrentUser(currentUser) {
  return {
    type: actionTypes.SET_CURRENT_USERS,
    payload: {
      currentUser,
    },
  };
}
