const { createStore, combineReducers } = require("redux");
import reducer from "./reducer";
import projectReducer from "./projects/projectReducers";
import issueReducer from "./issues/issuesReducers";
import userReducer from "./users/userReducer";

const state = {
    projects:projectReducer,
    issues:issueReducer,
    users:userReducer
}

 const rootReducer = combineReducers(state)
const store = createStore(rootReducer)

export default store