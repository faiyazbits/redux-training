import store from "./store";


import * as issueActions from "./issues/issue.action"
import * as projectActions from "./project/project.action"
import * as userActions from "./users/users.action"


import {issues} from "./data/issues.json"
import {projects} from "./data/project.json"
import {users} from "./data/users.json"



// single state object for entire application ( single source of truth)
// you should not directly mutate or update the store (changes are made with pure functions)
// state is readonly

// dispatch an action
// reducer will get called with current state and current action, will return state
// components are notified (subscribe)
// components will take the latest and update themselves

// issue tracking
// add issue, remove issue and mark issue as resolved

// design the store

console.log("store",store);
console.log("current state",store.getState());


store.subscribe(() => {
    console.log("store changed", store.getState());
})




store.dispatch(issueActions.addIssues(issues));
store.dispatch(projectActions.addProjects(projects));
store.dispatch(userActions.addUsers(users));


store.dispatch(issueActions.addBacklogIssue('backlog'));
store.dispatch(issueActions.addInProgressIssue("inprogress"));
store.dispatch(issueActions.addSelectedIssue("selected"));
store.dispatch(issueActions.addCompletedIssue("done"));

store.dispatch(issueActions.removeIssue('4'));
store.dispatch(issueActions.removeIssue('7'));


store.dispatch(projectActions.removeProject("2"));
store.dispatch(userActions.removeUser("2"));

store.dispatch(userActions.setCurrentUser("1"))
store.dispatch(projectActions.selectProject("3"));






// exercise one : refactor action creator for remove issue
// exercise two : implmenet bug resolution state management