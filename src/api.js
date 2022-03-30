

export function fetchProjects(){
    fetch('http://localhost:5000/projects',{
        headers: {Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImlhdCI6MTY0ODU3MjkxMywiZXhwIjoxNjY0MTI0OTEzfQ.o2j8qMMFZ-Z99wPEESUSKfAwzt1BY82-BLgiU1GIxkc'}
    })
    .then((res) => res.json())
    .then((response) => {
        console.log(response)
    })
}