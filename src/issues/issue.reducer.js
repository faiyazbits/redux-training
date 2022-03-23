

import * as actionTypes from "./issue.actionType";
const initialState = {
  issues: [],
  backlogIssues: [],
  selectedIssues: [],
  inprogressIssues: [],
  completedIssues: [],
  isIssueLoading: false,
};

export default function issueReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_ISSUES:
      return {
        ...state,
        issues: [...state.issues, action.payload.project],
      };

    case actionTypes.SET_ISSUES:
      return {
        ...state,
        isIssueLoading: false,
        issues: action.payload.issues,
      };

    case actionTypes.REMOVED_ISSUES:
      return {
        ...state,
        projects: state.issues.filter((issues) => issues.id !== action.payload.id),
      };

    case actionTypes.UPDATED_ISSUES:
      return state.issues.map((issues) => {
        if (issues.id == action.payload.id) {
          return {
            ...issues,
            type:"task"
          };
        } else {
          return issues;
        }
      });

    case actionTypes.BACKLOG_ISSUES:
      return {
        ...state,
        backlogIssues: state.issues.filter(issue => issue.status == action.payload.status)
      }


    case actionTypes.INPROGRESS__ISSUES:

      return {
        ...state,
        inprogressIssues: state.issues.filter(issue => issue.status == action.payload.status)
      }


    case actionTypes.COMPLETED_ISSUES:
      return {
        ...state,
        completedIssues: state.issues.filter(issue => issue.status == action.payload.status)
      }

    case actionTypes.SELECTED_ISSUES:
      return {
        ...state,
        selectedIssues: state.issues.filter(issue => issue.status == action.payload.status)
      }
    default:
      return state;
  }
}
