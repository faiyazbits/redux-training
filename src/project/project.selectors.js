import { filter } from "lodash";


 export function getSoftwareProjects(state){
     const projectState=state.projects;
     const projects=projectState.projects;
     return projects.filter (project => project.category== "software" )

 }
 
 