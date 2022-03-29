import store from "./store";

import {setIssues} from "./issues/issue.action"
import {setProjects,setActiveProject,updatedProject} from "./project/project.action"
import * as userActions from "./users/users.action"
import { setUsers } from "./users/users.action";


import { issues } from "./data/issues.json"
import { projects } from "./data/project.json"
import { users } from "./data/users.json"


import { getBackLogIssues, getDoneIssues, getInProgressIssues,getSelectedIssues, getStoryIssues } from "./issues/issue.selectors";
import { fetchProjects } from "./api";
import { getSoftwareProjects } from "./project/project.selectors";
import { getUser } from "./users/users.selectors";

console.log("current state",store.getState());

let action = setProjects(projects);
console.log('action',action);
store.dispatch(action);
console.log("current state",store.getState());


action = setActiveProject(projects[0]);
console.log(action);
store.dispatch(action);

console.log("current state",store.getState());
console.log("software", getSoftwareProjects(store.getState()));

action = setIssues(issues);
console.log(action);
store.dispatch(action);

console.log("current state",store.getState());

console.log('backlogIssues', getBackLogIssues(store.getState()));
console.log('inprogressIssues', getInProgressIssues(store.getState()));
console.log('selected', getSelectedIssues(store.getState()));
console.log('done', getDoneIssues(store.getState()));
console.log('story',getStoryIssues(store.getState()))



action = setUsers(users);
console.log(action);
store.dispatch(action);

console.log("current state",store.getState());
console.log('curruentUser',  getUser(store.getState()))



action = updatedProject({
  ...projects[0],
  name:'changed name'
});
console.log(action);
store.dispatch(action);

console.log("current state",store.getState());


// fetchProjects()


// side effects where do we perform 