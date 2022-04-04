import store from "./store";


import { addIssue, getIssues, setIssues, updateIssue } from "./issues/issue.action"
import { setProjects, setActiveProject, updateProject, getProjects, addProject, removeProject } from "./project/project.action"

import * as userActions from "./users/users.action"


import { issues } from "./data/issues.json"
import { projects } from "./data/project.json"
import { users } from "./data/users.json"


import { getBackLogIssues, getInProgressIssues } from "./issues/issue.selectors";
import { fetchIssues, fetchProjects } from "./api";
import { activeProject, newProject, updatedProject, issue, updatedIssue } from "./data/sample_data";
import { getProjectById } from "./project/project.selector";


//monkey-patching

/* const database = {
  rows: [],
  create(name, age) {
    this.rows.push(`${name},${age}`)
  }
}

function createAndLogUser() {
  let createUserRef = database.create
  database.create = function (name, age) {
    createUserRef.call(database, 'faiyaz', 23)
    console.log(`user created ${name} ${age}`)
  }
}

createAndLogUser()
database.create('faiyaz', 26)
database.create('marzooka', 23) */



store.dispatch((getProjects()))

setTimeout(() => {
  store.dispatch((addProject(newProject)))
  store.dispatch((setActiveProject(activeProject)))
  store.dispatch(updateProject(updatedProject))
  store.dispatch(removeProject(2))
}, 2000)


setTimeout(() => {
  const selectedProject = getProjectById(store.getState(), 1)
  console.log(selectedProject)
  store.dispatch(getIssues(selectedProject.id))
}, 5000)


setTimeout(() => {
  store.dispatch((addIssue(issue)))
},6000)



