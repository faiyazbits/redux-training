

export function getProjectById(state,projectId){
    const projectState = state.projects;
    const projects  = projectState.projects;
    return projects.find((p) => p.id === projectId)
}