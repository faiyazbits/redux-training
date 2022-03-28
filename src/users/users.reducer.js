import * as actionTypes from './users.actionType';

const initialState = {
    users: [],
    currentUser: {},
    isUserLoading: false,
};

export default function userReducer(state = initialState, action) {

    switch (action.type) {

        case actionTypes.SET_USERS:
            return {
                ...state,
                users: action.payload.users
            }

        case actionTypes.ADD_USER:
            return {
                ...state,
                users: [...state.users, { name: action.payload.name, email: action.payload.email }]
            }

        case actionTypes.REMOVED_USER:
            return {
                ...state,
                users: state.users.filter(user => user.id != action.payload.id)
            }

        case actionTypes.UPDATE_USER:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id == action.payload.updateUser.id) {
                        return {
                            ...action.payload.updateUser
                        }
                    }
                    return user;
                })
            }

        case actionTypes.CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload.currentUser
            }

        default:
            return state;
    }
}