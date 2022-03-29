




export function getUser(state){
    const userState = state.users;
    const users = userState.users;
    return users.filter(user => user.id == "2" )
}
