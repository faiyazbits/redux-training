import store from "./store";

import {removeIssue, setIssues} from "./issues/issue.action"
import {setProjects,setActiveProject,updatedProject} from "./project/project.action"
import * as userActions from "./users/users.action"
import { setUsers } from "./users/users.action";


import { issues } from "./data/issues.json"
import { projects } from "./data/project.json"
import { users } from "./data/users.json"


import { getBackLogIssues, getDoneIssues, getInProgressIssues,getSelectedIssues, getStoryIssues, removedIssue } from "./issues/issue.selectors";
import { fetchProjects } from "./api";
import { getSoftwareProjects } from "./project/project.selectors";
import { getUser } from "./users/users.selectors";
import { create } from "lodash";

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

 action = removeIssue('2')
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


fetchProjects()


// side effects where do we perform 

//Monkeypatching

const database ={
    name:'users',
    usersArray:[],

    create(name,age){
        const users ={
            name,
            age
        };
        this. usersArray.push(users)
    }
}

// console.log(database.usersArray)
 database.create("pavi",22)




function createAndlogging(){
    const newCreate=database.create;
    database.create=function(name,age){
        newCreate.call(database,name,age) 
        console.log(`user created ${name} ${age}`)
    }
    

}
createAndlogging()

database.create("priyanka",22)
console.log(database.usersArray)