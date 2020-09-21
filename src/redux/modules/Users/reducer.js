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

    default:
      return state
  }
}
