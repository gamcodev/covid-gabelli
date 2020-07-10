import UserService from '../../../services/UserService'
import {
  makeFetchRequest,
  finishFetchRequest,
  unsuccessfulFetchRequest,
  successfulExport,
  successfullyExporting
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
      if(users.errors) {
        dispatch(unsuccessfulFetchRequest(users.errors))
      } else {
        dispatch(finishFetchRequest())
        dispatch(successfulUsersFetch(users))
      }
    })
  }
}

export const exportUserCerts = (date, user_email) => {
  return dispatch => {
    dispatch(successfullyExporting())
    UserService.exportUserCerts(date, user_email)
    .then(users => {
      if(users.errors) {
        dispatch(unsuccessfulFetchRequest(users.errors))
      } else {
        dispatch(successfulExport())
      }
    })
  }
}
