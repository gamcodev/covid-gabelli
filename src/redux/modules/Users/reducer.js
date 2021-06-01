export default (state = [], action) => {
  switch(action.type) {

    case 'SUCCESSFUL_USERS_FETCH':
      return {
        ...state,
        users: action.users
      }
    case 'SUCCESSFUL_USER CERTS_FETCH':
      return {
        ...state,
        userCerts: action.users
      }
    case 'SUCCESSFUL_USER_CREATE':
      return {
        ...state,
        user: action.user
      }
    // case 'SUCCESSFUL_USER_UPDATE':
    //   const index = state.users.findIndex(user => user.id === action.user.id)
    //   debugger
    //   return [
    //     ...state.users.slice(0, index),
    //     { users: action.user },
    //     ...state.users.slice(index + 1)
    //   ]

    default:
      return state
  }
}
