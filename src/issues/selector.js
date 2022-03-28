export function getBacklogIssues(state){
    const issueState = state.issues
    const issues = issueState.issues
issues.filter((issue)=>{
    return issue.status == 'backlog'
})
}

export function getInProgressIssues(state){
    const issueState = state.issues
    const issues = issueState.issues
issues.filter((issue)=>{
    return issue.status == 'inProgress'
    })
    }