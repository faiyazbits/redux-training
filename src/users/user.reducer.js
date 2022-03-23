import * as actionTypes from "./user.actionType";

const initialState = {
  users: [],
  activeUsers: {},
  isUsersLoading: false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_USERS:
      return {
        ...state,
        users: [...state.users, action.payload.users],
      };
    case actionTypes.UPDATED_USERS:
      return state.users.map((users) => {
        if (users.id == action.payload.id) {
          return {
            ...users,
            currentUser:"provility"

          };
        } else {
          return users;
        }
      });
    case actionTypes.SET_CURRENT_USERS:
      return {
        ...state,
        isUserLoading: false,
        users: action.payload.users,
      };

    default:
      return state;
  }
}





