import { combineReducers, createStore ,applyMiddleware} from "redux";

import  issueReducer  from "./issues/issue.reducer"
import  userReducer  from "./users/users.reducer"
import  projectReducer  from "./project/project.reducer"
import thunk from 'redux-thunk'
import logger from 'redux-logger'



const state  = {
  users:userReducer,
  issues:issueReducer,
  projects:projectReducer
}

const rdcr = combineReducers(state);
const store = createStore(rdcr,applyMiddleware(thunk,logger));

export default store;

