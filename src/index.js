import store from "./store";

import * as issueActions from "./issues/issue.action"
import * as projectActions from "./project/project.action"
import * as userActions from "./users/users.action"


import { issues } from "./data/issues.json"
import { projects } from "./data/project.json"
import { users } from "./data/users.json"

import { project, activeProject , updatedProject , updateUser,currentUser} from "./data/sample_data"


console.log("store",store);
console.log("current state",store.getState());


store.subscribe(() => {
    console.log("store changed", store.getState());
})


  store.dispatch(issueActions.setIssues(issues));
 store.dispatch(projectActions.setProjects(projects));
 store.dispatch(userActions.setUsers(users));

store.dispatch(projectActions.addProject(project.name,project.description,project.url));
store.dispatch(projectActions.updatedProject(updatedProject)); 
store.dispatch(projectActions.setActiveProject(activeProject));
 store.dispatch(projectActions.removeProject('2'));



store.dispatch(userActions.addUser('elvin',"elvi@gmail.com"))
store.dispatch(userActions.removeUser('1'));
store.dispatch(userActions.setCurrentUser(currentUser));
store.dispatch(userActions.updateUser(updateUser));

 
store.dispatch(issueActions.removeIssue('4'));
store.dispatch(issueActions.removeIssue('7'));

store.dispatch(issueActions.addBacklogIssue('backlog'));
store.dispatch(issueActions.addInProgressIssue("inprogress"));
store.dispatch(issueActions.addSelectedIssue("selected"));
store.dispatch(issueActions.addCompletedIssue("done"));


/*
store.dispatch(issueActions.addIssue(issue));


store.dispatch(projectActions.removeProject("2"));
store.dispatch(userActions.removeUser("2"));

store.dispatch(userActions.setCurrentUser("1"))
store.dispatch(projectActions.setProjects("3")); */






// exercise one : refactor action creator for remove issue
// exercise two : implmenet bug resolution state management