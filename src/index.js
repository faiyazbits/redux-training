import store from "./store";
const projects = require('../src/data/projectsData.json')
const issues = require('../src/data/issuesData.json')
const users = require('../src/data/usersData.json')
import * as userActions from './users/action'
import * as projectActions from './projects/action'
import * as issueActions from './issues/action'
import{currentUser,project,updatedProject,activeProject,issue,updatedIssue,updatedUser} from './data/dummy.data'
import {getBacklogIssues,getInProgressIssues} from './issues/selector'

store.subscribe(() => {
    console.log("store changed", store.getState());
})


// store.dispatch(userActions.setUsers(users))
// store.dispatch(userActions.setCurrentUser(currentUser))
// store.dispatch(userActions.addUser('marzooka','marzooka@gmail.com'))
// store.dispatch(userActions.updateUser(updatedUser))
// store.dispatch(userActions.removeUser(2))


store.dispatch(projectActions.setProjects(projects))
store.dispatch(projectActions.addProject(project))
store.dispatch(projectActions.setActiveProject(activeProject))
store.dispatch(projectActions.updateProject(updatedProject))
store.dispatch(projectActions.removeProject(1))


// store.dispatch(issueActions.setIssues(issues))
// store.dispatch(issueActions.addIssue(issue))
// store.dispatch(issueActions.updateIssue(updatedIssue))
// store.dispatch(issueActions.removeIssue(1))



// console.log('backlog issue' , getBacklogIssues(store.getState()))
// console.log('in progress issues' , getInProgressIssues(store.getState()))




