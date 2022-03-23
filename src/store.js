import { combineReducers, createStore } from "redux";

import  issueReducer  from "./issues/issue.reducer"
import  userReducer  from "./users/users.reducer"
import  projectReducer  from "./project/project.reducer"



const state  = {
  users:userReducer,
  issues:issueReducer,
  projects:projectReducer
}

const rdcr = combineReducers(state);
const store = createStore(rdcr);

export default store;

