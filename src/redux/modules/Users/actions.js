import UserService from '../../../services/UserService'

export const successfulUsersFetch = users => {
  return {
    type: 'SUCCESSFUL_USERS_FETCH',
    users
  }
}
export const fetchUsers = () => {
  return dispatch => {
    UserService.fetchUsers()
    .then(users => {
      dispatch(successfulUsersFetch(users))
    })
  }
}

export const fetchUsersByDate = (date) => {
  return dispatch => {
    UserService.fetchUsersByDate(date)
    .then(users => {
      dispatch(successfulUsersFetch(users))
    })
  }
}
