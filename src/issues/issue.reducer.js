import * as actionType from './issue.actionType';

const initialState = {
    issues: [],
    backlogIssues: [],
    selectedIssues:[],
    inprogressIssues:[],
    completedIssues:[],
    isissueLoading: false,
};


export default function issueReducer(state = initialState, action) {

    switch (action.type) {

        case actionType.ADD_ISSUE:
            return {
                ...state,
                issues: action.payload.description
            }
    
        case actionType.BACKLOG_ISSUE:
            return {
                ...state,
                backlogIssues: state.issues.filter(issue => issue.status == action.payload.status)
            }

        case actionType.INPROGRESS_ISSUE:
            return {
                ...state,
                inprogressIssues: state.issues.filter(issue => issue.status == action.payload.status)
            }
            
            case actionType.SELECTED_ISSUE:
                return {
                    ...state,
                    selectedIssues: state.issues.filter(issue => issue.status == action.payload.status)
                }


        case actionType.COMPLETED_ISSUE:
            return {
                ...state,
                completedIssues: state.issues.filter(issue => issue.status == action.payload.status)
            }
       

        case actionType.SET_ISSUES:
            return {
                ...state,
                issues : action.payload.issues
            }

            case actionType.REMOVED_ISSUE:
                return {
                    ...state,
                    issues: state.issues.filter(issue => issue.id != action.payload.id)
                }

        default:
            return state;
    }
}