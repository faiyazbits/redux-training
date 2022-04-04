export function getProjectById(state,id){
    const projectState = state.projects;
    const projects = projectState.projects;
    return projects.find((project)=>{
        return project.id == id
    })
}