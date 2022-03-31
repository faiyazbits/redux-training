import * as actionTypes from "./issue.actionType";

const initialState = {
  issues: [],
  isIssueLoading: false,
};

export default function issueReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_ISSUE:
      return {
        ...state,
        issues: [action.payload.issue, ...state.issues],
      };

    case actionTypes.ADD_ISSUE:
      return {
        ...state,
        issues: [action.payload.issue, ...state.issues],
      };

    case actionTypes.SET_ISSUES:
      return {
        ...state,
        isIssueLoading: false,
        issues: action.payload.issues,
      };

    case actionTypes.REMOVED_ISSUE:
      return {
        ...state,
        issues: state.issues.filter((issue) => issue.id != action.payload.id),
      };

    case actionTypes.ISSUE_LOADING_STATUS:
      return {
        ...state,
        isIssueLoading: action.payload.isLoading
      }
    default:
      return state;
  }
}
