import * as actionTypes from './actionTypes'

let id = 1;

function reducer(state = [], action) {
    switch (action.type) {
        case actionTypes.ISSUE_ADDED:
            return [...state, {
                id: id++,
                description: action.payload.description,
                isResolved: false
            }]


        case actionTypes.ISSUE_REMOVED:
            return state.filter(issue => {
                return issue.id !== action.payload.id
            })

        case actionTypes.ISSUE_RESOLVED:
            return state.map(issue => {
                if (issue.id == action.payload.id) {
                   return {
                       ...issue,
                       isResolved:true
                   }
                }else{
                    return issue;
                }
            })

        default: state
    }
    return state
}

export default reducer