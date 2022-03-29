

export function fetchProjects(){
    fetch('http://localhost:5000/projects',{
        headers: {Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImlhdCI6MTY0ODUzMDAxOCwiZXhwIjoxNjY0MDgyMDE4fQ.qFHJDUhyKDOALbUBmuqb2fMrP2div28-uLaZHP_ocYI'}
    })
    .then((res) => res.json())
    .then((response) => {
        console.log(response)
    })
}