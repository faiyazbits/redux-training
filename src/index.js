import store from "./store";

import  *as issueAction from "./issues/issue.action"
import *as projectAction from "./projects/project.action"
import *as userAction from "./users/user.action"

import issuesData from "./data/issues";
import projectData from "./data/projects"
import userData from  "./data/users"




store.subscribe(() => {
    console.log("store changed", store.getState());
    
})

// issues action
 store.dispatch(issueAction.addIssue(issuesData))
 store.dispatch(issueAction.setIssue(issuesData))
 store.dispatch(issueAction.removeIssue(7))
 store.dispatch(issueAction.updateIssue(3))

 store.dispatch(issueAction.backlogIssue("backlog"))
 store.dispatch(issueAction.inprogressIssue("inprogress"))
 store.dispatch(issueAction.completedIssue("selected"))
 store.dispatch(issueAction.selectedIssue("done"))
 

// projects action

store.dispatch(projectAction.addProject(projectData))
store.dispatch(projectAction.setProjects(projectData))
store.dispatch(projectAction.removeProject(3))
store.dispatch(projectAction.updatedProject(6))



// users action
store.dispatch(userAction.addUser(userData))
store.dispatch(userAction.updateUser(2))
store.dispatch(userAction.setCurrentUser(1))










































