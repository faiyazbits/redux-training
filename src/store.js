import {createStore,combineReducers} from "redux";
import issueReducer from "./issues/issue.reducer";
import userReducer from "./users/user.reducer";
import projectReducer from "./projects/project.reducer"

const state ={
     issues:issueReducer,
     users:userReducer,
     project:projectReducer
 }
 const currentReducer=combineReducers(state);
 const store=createStore(currentReducer)

export default store;

