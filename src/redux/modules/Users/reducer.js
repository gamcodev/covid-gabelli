export default (state = [], action) => {
  switch(action.type) {

    case 'SUCCESSFUL_USERS_FETCH':
      return {
        ...state,
        users: action.users
      }

    default:
      return state
  }
}
