import * as actionType from "./issue.actionType";

const initialState = {
  issues: [],
  isIssueLoading: false,
  error:''
};

export default function issueReducer(state = initialState, action) {
  switch (action.type) {
    case actionType.ADD_ISSUE:
      return {
        ...state,
        issues: [action.payload.issue, ...state.issues],
      };
   case actionType.FETCH_ISSUES_LOADING:
     return {
       ...state,
       isIssueLoading:true
      }
      case actionType.SET_ISSUES:
      return {
        ...state,
        issues: action.payload.issues,
      };

    case actionType.FETCH_ISSUES_FAILURE:
      return{
        ... state,
        issues: [],
       isIssueLoading: false,
       error:action.payload.issues
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
