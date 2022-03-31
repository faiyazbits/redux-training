import store from "./store";


import { fetchProjects } from "./project/project.action";

//console.log("current state",store.getState());

// monkeypatching

// const database={
//   rows:[],
//   create(name,age){
//       const user={
//         name,age
//       }
//       this.rows.push(user)
//       console.log(`user Created with ${name} ${age} `);
//   }
    
// }

// database.create('faiyaz',23);
// console.log(database.rows);

// function patchCreate(){
//   const oldCreate=database.create; 
//   database.create=function(name,age){
//     oldCreate.call(database,name,age);
//     console.log(`created with ${name}${age}`)
//   }
// }

// patchCreate()
// database.create('chitra',23)


// // side effects where do we perform 



store.dispatch(fetchProjects())
console.log(store.getState())