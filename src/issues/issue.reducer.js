import * as actionType from "./issue.actionType";

const initialState = {
  issues: [],
  isIssueLoading: false,
};

export default function issueReducer(state = initialState, action) {
  switch (action.type) {
    case actionType.ADD_ISSUE:
      return {
        ...state,
        issues: [action.payload.issue, ...state.issues],
      };

    case actionType.ADD_ISSUE:
        return {
          ...state,
          issues: [action.payload.issue, {...state.issue}],
    };  

    case actionType.SET_ISSUES:
      return {
        ...state,
        issues: action.payload.issues,
        isIssueLoading:false
      };

    case actionType.SET_ISSUE_LOADING_STATUS:
      return {
        ...state,
        isIssueLoading:action.payload.status
      }
      case actionType.UPDATE_ISSUE:
        return {
            ...state,
            issues: state.issues.map((issue) => {
                if (action.payload.updatedIssue.id == issue.id) {
                    return {
                        ...action.payload.updatedIssue
                    }
                }
                return issue;
            })
        }
    case actionType.REMOVED_ISSUE:
      return {
        ...state,
        issues: state.issues.filter((issue) => issue.id != action.payload.id),
      };

    default:
      return state;
  }
}
