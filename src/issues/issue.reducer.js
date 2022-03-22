import * as actionTypes from './issue.actionType';


export default function issueReducer(state = [], action) {

    switch (action.type) {

        case actionTypes.ADD_ISSUE:
            return {
                ...state,
                issues: action.payload.description
            }

        case actionTypes.BACKLOG_ISSUE:
            return {
                ...state,
                backlogIssues: state.issues.filter(issue => issue.status == action.payload.status)
            }

        case actionTypes.INPROGRESS_ISSUE:
            return {
                ...state,
                inProgressIssues: state.issues.filter(issue => issue.status == action.payload.status)
            }

        case actionTypes.COMPLETED_ISSUE:
            return {
                ...state,
                completedIssues: state.issues.filter(issue => issue.status == action.payload.status)
            }

        case actionTypes.SELECTED_ISSUE:
            return {
                ...state,
                selectedIssues: state.issues.filter(status => status.status == action.payload.status)
            }

            case actionTypes.REMOVED_ISSUE:
                return {
                    ...state,
                    issues: state.issues.filter(issue => issue.id != action.payload.id)
                }

        default:
            return state;
    }
}