import store from "./store";

import {fetchIssues, setIssues} from "./issues/issue.action"
import {setProjects,setActiveProject,updatedProject, addProject, fetchProjects} from "./project/project.action"
import {fetchUsers, setCurrentUser, setUsers} from "./users/users.action"

import { issues } from "./data/issues.json"
import { projects } from "./data/project.json"
import { users } from "./data/users.json"

import { getBackLogIssues, getCompletedIssues, getInProgressIssues, getSelectedIssues, getStoryIssues, getTaskIssues } from "./issues/issue.selectors";

import { getProjectCategory } from "./project/project.selectors";
import { getUser } from "./users/users.selectors";
import { project, updateProject } from "./data/sample_data";
import { fetchProjectsApi } from "./api";


console.log("current state",store.getState());

store.dispatch(fetchProjects());
store.dispatch(fetchIssues());
store.dispatch(fetchUsers());

 const database = {
 tableName : 'user',
 rows:[],
 create(name,age){
   const user ={
     name,age
   };
   this.rows.push(user);  
 }
}


function patchCreate(){
  const orginalFunction = database.create;
   database.create=function(name,age){
    orginalFunction.call(database,name,age);
      console.log(`user created ${name} , ${age}`); 
   }
}

patchCreate();
database.create("elvin",23);

console.log(database.rows)











/* let action = setProjects(projects);
console.log('action',action);
//store.dispatch(action);
console.log("current state",store.getState()); 

action = setActiveProject(projects[0]);
console.log(action);
store.dispatch(action);

console.log("current state",store.getState());

action = setIssues(issues);
console.log(action);
store.dispatch(action);

console.log("current state",store.getState());

console.log('backlogIssues', getBackLogIssues(store.getState()));
console.log('inprogressIssues', getInProgressIssues(store.getState()));

action = updatedProject({
  ...projects[0],
  name:'changed name'
});
console.log(action);
store.dispatch(action);

console.log("current state",store.getState());


action = setUsers(users);
console.log('action',action);
store.dispatch(action);
console.log("current state",store.getState()); 

 

 console.log("backlog",getBackLogIssues(store.getState()))
 console.log("selected",getSelectedIssues(store.getState()))

 console.log("inprogress",getInProgressIssues(store.getState()))

 console.log("done",getCompletedIssues(store.getState()))

 console.log("task",getTaskIssues(store.getState()))

 console.log("story",getStoryIssues(store.getState()))

 console.log("category",getProjectCategory(store.getState()))

 console.log("userDetail",getUser(store.getState()))

 action = addProject(project);
store.dispatch(action);
console.log("added",store.getState())

action = updatedProject(updateProject)
store.dispatch(action);
console.log("updated",store.getState())

action = setCurrentUser(users[0])
store.dispatch(action);
console.log("activeUser",store.getState())




console.log("change state",store.getState()); */
// side effects where do we perform 
/* 
let action = addProject(project);
store.dispatch(action);
console.log("added",store.getState())

action = addProject(project);
store.dispatch(action);
console.log("added",store.getState())



action = updatedProject(updateProject)
store.dispatch(action);
console.log("updated",store.getState()) */