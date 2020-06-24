import UserService from '../../../services/UserService'
import {
  makeFetchRequest,
  finishFetchRequest,
  unsuccessfulFetchRequest
} from '../../appTransactions';

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
    dispatch(makeFetchRequest())
    UserService.fetchUsersByDate(date)
    .then(users => {
      console.log(users)
      if(users.errors) {
        dispatch(unsuccessfulFetchRequest(users.errors))
      } else {
        dispatch(finishFetchRequest())
        dispatch(successfulUsersFetch(users))
      }
    })
  }
}
