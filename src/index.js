import store from "./store";


import * as issueActions from "./issues/issue.action"
import * as projectActions from "./project/project.action"
import * as userActions from "./users/users.action"


import { issues } from "./data/issues.json"
import { projects } from "./data/project.json"
import { users } from "./data/users.json"



// single state object for entire application ( single source of truth)
// you should not directly mutate or update the store (changes are made with pure functions)
// state is readonly

// dispatch an action
// reducer will get called with current state and current action, will return state
// components are notified (subscribe)
// components will take the latest and update themselves

// issue tracking
// add issue, remove issue and mark issue as resolved

// design the store


  const project = {
            "id": 3,
            "name": "singularity 2.0",
            "url": "https://www.atlassian.com/software/jira",
            "description": "Plan, track, and manage your agile and software development projects in Jira. Customize your workflow, collaborate, and release great software.",
            "category": "Manager",
            "createdAt": "2022-02-08T11:12:48.358Z",
            "updatedAt": "2022-02-08T11:12:48.358Z"
            }

            const activeProject = {
                "id": 3,
                "name": "singularity 2.0",
                "url": "https://www.atlassian.com/software/jira",
                "description": "Plan, track, and manage your agile and software development projects in Jira. Customize your workflow, collaborate, and release great software.",
                "category": "Manager",
                "createdAt": "2022-02-08T11:12:48.358Z",
                "updatedAt": "2022-02-08T11:12:48.358Z"
                }
    

 const updatedProject = {
                "id": 1,
                "name": "singularity 4.0",
                "url": "https://www.atlassian.com/software/jira",
                "description": "P software development projects in Jira. Customize your workflow, collaborate, and release great software.",
                "category": "software",
                "createdAt": "2022-02-08T11:12:48.358Z",
                "updatedAt": "2022-02-08T11:12:48.358Z"
                }

const issue = {
    "id": 10,
    "title": "Click on an issue to see what's behind it.",
    "type": "task",
    "status": "backlog",
    "priority": "2",
    "listPosition": 2,
    "estimate": 5,
    "timeSpent": 2,
    "reporterId": 3,
    "projectId": 1,
    "userIds": [
        2
    ]
}

const currentUser = {
    "id": 2,
    "name": "Pickle Rick",
    "email": "rick@jira.guest",
    "avatarUrl": "https://i.ibb.co/7JM1P2r/picke-rick.jpg",
    "createdAt": "2022-02-08T11:07:49.415Z",
    "updatedAt": "2022-02-08T11:07:49.430Z",
    "projectId": 1,
    "currentUser":false
}

const updateUser = {
    "id": 3,
    "name": " Rick",
    "email": "rickanto@jira.guest",
    "avatarUrl": "https://i.ibb.co/7JM1P2r/picke-rick.jpg",
    "createdAt": "2022-02-08T11:07:49.415Z",
    "updatedAt": "2022-02-08T11:07:49.430Z",
    "projectId": 1,
    "currentUser":false
}



console.log("store",store);
console.log("current state",store.getState());


store.subscribe(() => {
    console.log("store changed", store.getState());
})


 store.dispatch(issueActions.setIssues(issues));
 store.dispatch(projectActions.setProjects(projects));
 store.dispatch(userActions.setUsers(users));

store.dispatch(projectActions.addProject(project.name,project.description,project.url));
store.dispatch(projectActions.removeProject('2'));
store.dispatch(projectActions.updatedProject(updatedProject)); 
store.dispatch(projectActions.setActiveProject(activeProject));


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