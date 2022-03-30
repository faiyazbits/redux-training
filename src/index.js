import store from "./store";

import {fetchIssues, removeIssue, setIssues} from "./issues/issue.action"
import {setProjects,setActiveProject,updatedProject,fetchProjects} from "./project/project.action"
import * as userActions from "./users/users.action"
import { setUsers,fetchUsers } from "./users/users.action";


import { issues } from "./data/issues.json"
import { projects } from "./data/project.json"
import { users } from "./data/users.json"


import { getBackLogIssues, getDoneIssues, getInProgressIssues,getSelectedIssues, getStoryIssues, removedIssue } from "./issues/issue.selectors";

import { getSoftwareProjects } from "./project/project.selectors";
import { getUser } from "./users/users.selectors";
import { create } from "lodash";


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

console.log(database.usersArray)
 database.create("pavi",23)


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

// fetching the workzone data
store.dispatch(fetchProjects())
store.dispatch(fetchIssues())
store.dispatch(fetchUsers())



