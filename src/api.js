import { setActiveProject, setProjects } from "./project/project.action";
import store from "./store"

export function fetchProjects(){
  fetch('http://localhost:5000/projects',{
        headers: {Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImlhdCI6MTY0ODQ2MzI5NiwiZXhwIjoxNjY0MDE1Mjk2fQ.uN8qDFqM17hr6aCSO8udskx0P-TAExqZwo88ijbA9O4'}
    })
    .then((res) => res.json())
    .then((response) => {   
      store.dispatch(setProjects(response.projects))
      console.log("current state",store.getState()); 
      
    })
}

