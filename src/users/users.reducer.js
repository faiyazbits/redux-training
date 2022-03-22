import * as actionTypes from './users.actionType';




export default function userReducer(state = [], action) {

    switch (action.type) {
        case actionTypes.ADD_USER:

            return {
                ...state,
                usersList: action.payload.description
            }

        case actionTypes.REMOVED_USER:
            return {
                usersList: state.usersList.filter(user => user.id != action.payload.id)
            }

        case actionTypes.UPDATE_USER:
            return state.usersList.map(user => {
                if (user.id == action.payload.id) {
                    return {
                        ...user,
                        currentUser: "ELVINNNNNN"
                    }
                }
                return user;
            })

        case actionTypes.CURRENT_USER:
            return {
                ...state,
                currentUser: state.usersList.filter(user => user.id == action.payload.id)
            }


        default:
            return state;
    }
}