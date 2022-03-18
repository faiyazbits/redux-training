

import * as actionTypes from './actionTypes';

let index = 0
export default function reducer(state = [], action) {

    switch (action.type) {
        case actionTypes.ADD_ISSUE:
            return [
                ...state,
                {
                    id: ++index,
                    description: action.payload.description,
                    resolved: false
                }
            ]
        case actionTypes.REMOVED_ISSUE:
            return state.filter(i => i.id !== action.payload.id);

        case actionTypes.RESOLVED_ISSUE:
            return state.map(issue => {
                if (issue.id == action.payload.id) {
                    return {
                        ...issue,
                        resolved: true
                    }
                }
                return issue;

            })
        case actionTypes.UPDATE_ISSUE:
            return state.map(issue => {
                if (issue.id == action.payload.id) {
                    return {
                        ...issue,
                        description: " update new issue",
                        editable: true,
                        resolved: true
                    }
                }
                return issue;

            })

        default: state
    }
}