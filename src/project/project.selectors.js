
export function getProjectCategory(state){
    const projectState = state.projects;
    const projects = projectState.projects;
    return projects.filter(project => project.category == "software" )
}
