

export function fetchProjectsApi(){
   return fetch('http://localhost:5000/projects',{
        headers: {Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImlhdCI6MTY0NjgyODk2NCwiZXhwIjoxNjYyMzgwOTY0fQ.C1sBA_X_yKr1A0sagq9rV1bKqNucgf1ElDHY7K-83ok'}
    })
    .then((res) => res.json())
    .then((response) => {
        return response.projects;
    })
}