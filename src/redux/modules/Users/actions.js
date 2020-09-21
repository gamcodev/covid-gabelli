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

export const successfulUserCertsFetch = users => {
  return {
    type: 'SUCCESSFUL_USER CERTS_FETCH',
    users
  }
}

export const successfulUserCreate = user => {
  return {
    type: 'SUCCESSFUL_USER_CREATE',
    user
  }
}

export const fetchUsers = () => {
  return dispatch => {
    dispatch(makeFetchRequest())
    UserService.fetchUsers()
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

export const createUser = user => {
  return dispatch => {
    dispatch(makeFetchRequest())
    UserService.createUser(user)
    .then(user => {
      if(user.errors) {
        dispatch(unsuccessfulFetchRequest(user.errors))
      } else {
        dispatch(finishFetchRequest())
        dispatch(successfulUserCreate(user))
      }
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
        dispatch(successfulUserCertsFetch(users))
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
