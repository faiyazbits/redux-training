import store from "./store";

import {fetchIssues, setIssues} from "./issues/issue.action"
import {setProjects,setActiveProject,updatedProject,fetchProjects, addProject} from "./project/project.action"
import * as userActions from "./users/users.action"
import {} from './issues/issue.action'
import { getBackLogIssues, getInProgressIssues } from "./issues/issue.selectors";
import { getProjectById } from './project/project.selectors'

// this action will fetch the project and dispatch set project action
store.dispatch(fetchProjects());

// we will have projects in the store now

// in order to fetch the issues of a project. we need to dispatch fetch issues action with projectId

// set timeout is because fetch projects is async call and will only get the data after some time. framework will handle this 
setTimeout(() => {
  // getProjectById is a selector to select a project from the store for a given id
const firstProject = getProjectById(store.getState(),1);
console.log('first project selected', firstProject);

// dispatch fetch issues action
store.dispatch(fetchIssues(firstProject.id));

// store will have issues now
// we can use selectors to get different kind of issues

setTimeout(() => {
  const backlogs = getBackLogIssues(store.getState());
  console.log('backlog issues',backlogs);
},2000)


const newProject = {
  "id": 3,
  "name": "singularity 3.0",
  "url": "https://www.atlassian.com/software/jira",
  "description": "Plan, track, and manage your agile and software development projects in Jira. Customize your workflow, collaborate, and release great software.",
  "category": "software",
}

// just adding a new project to the store
store.dispatch(addProject(newProject));


},2000)

