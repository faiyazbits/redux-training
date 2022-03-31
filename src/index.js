import store from "./store";


import { setIssues } from "./issues/issue.action"
import { setProjects, setActiveProject, updatedProject, getProjects } from "./project/project.action"
import * as userActions from "./users/users.action"


import { issues } from "./data/issues.json"
import { projects } from "./data/project.json"
import { users } from "./data/users.json"


import { getBackLogIssues, getInProgressIssues } from "./issues/issue.selectors";
import { fetchProjects } from "./api";



const database = {
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
database.create('marzooka', 23)
