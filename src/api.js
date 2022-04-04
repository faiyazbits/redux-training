

export function fetchProjects(){
   return fetch('http://localhost:5000/projects',{
        headers: {Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImlhdCI6MTY0ODQzNTM4NCwiZXhwIjoxNjYzOTg3Mzg0fQ.hl1KBkW9nhNrUNgTf9wTF-plB72SQekWsOE1CQgvHP8'}
    })
}


export function fetchIssues(projectId){
    return fetch(`http://localhost:5000/issues?projectId=${projectId}`,{
        headers: {Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImlhdCI6MTY0ODQzNTM4NCwiZXhwIjoxNjYzOTg3Mzg0fQ.hl1KBkW9nhNrUNgTf9wTF-plB72SQekWsOE1CQgvHP8'}
    })
    
}