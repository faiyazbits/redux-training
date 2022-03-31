


export function fetchProjectsApi(){
    return fetch('http://localhost:5000/projects',{
       headers: {Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImlhdCI6MTY0ODcwNjAzMSwiZXhwIjoxNjY0MjU4MDMxfQ.7IRyFekBjmmZrCPO-aYliRGMpx1hsB1AHUJZd72zMPU'}
   })
}


export function fetchIssuesApi(){
    return fetch('http://localhost:5000/issues',{
           headers: {Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImlhdCI6MTY0ODQ2MzI5NiwiZXhwIjoxNjY0MDE1Mjk2fQ.uN8qDFqM17hr6aCSO8udskx0P-TAExqZwo88ijbA9O4'}
       })
      
   }


   export function fetchUsersApi(){
    return fetch('http://localhost:5000/users',{
           headers: {Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImlhdCI6MTY0ODQ2MzI5NiwiZXhwIjoxNjY0MDE1Mjk2fQ.uN8qDFqM17hr6aCSO8udskx0P-TAExqZwo88ijbA9O4'}
       })
       
   }