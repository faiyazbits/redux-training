

// anything than can be derived form already exisitng state use selector
export function getBackLogIssues(state){
    const issueState = state.issues;
    const issues = issueState.issues;
    return issues.filter(issue => issue.status == "backlog" )
}


export function getInProgressIssues(state){
    const issueState = state.issues;
    const issues = issueState.issues;
    return issues.filter(issue => issue.status == "inprogress" )
}


export function getSelectedIssues(state){
    const issueState = state.issues;
    const issues = issueState.issues;
    return issues.filter(issue => issue.status == "selected" )
}


export function getCompletedIssues(state){
    const issueState = state.issues;
    const issues = issueState.issues;
    return issues.filter(issue => issue.status == "done" )
}


export function getStoryIssues(state){
    const issueState = state.issues;
    const issues = issueState.issues;
    return issues.filter(issue => issue.type == "task" )
}


export function getTaskIssues(state){
    const issueState = state.issues;
    const issues = issueState.issues;
    return issues.filter(issue => issue.type == "story" )
}