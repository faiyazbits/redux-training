import { filter } from "lodash";

  export function getUser(state){
      const userState= state.users;
      const users=userState.users;
      return users.filter(user => user.name == "Pickle Rick")
      
  }