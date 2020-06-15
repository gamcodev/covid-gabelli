import AuthService from '../../../services/AuthService'

import {
  makeFetchRequest,
  finishFetchRequest,
  unsuccessfulFetchRequest
} from '../../appTransactions'

export const authenticationRequest = () => {
  return {
    type: 'AUTHENTICATION_REQUEST'
  }
}

export const setCurrentUser = user => {
  return {
    type: 'AUTHENTICATION_SUCCESS',
    user
  }
}

export const authenticationFailure = (errors) => {
  return {
    type: 'AUTHENTICATION_FAILURE',
    errors
   };
}

export const logout = () => {
  localStorage.removeItem('token');
  return { type: 'LOGOUT' };
}

export const replaceUser = user => {
  return {
    type: 'REPLACE_USER',
    user
  }
}

export const headers = () => {
  const token = localStorage.getItem('token');
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer: ${token}`,
  }
}

export const login = (user) => {
  return dispatch => {
    dispatch(makeFetchRequest())
    dispatch(authenticationRequest());
    AuthService.login(user)
      .then(body => {
        console.log(body)
        if (body.errors) {
          dispatch(authenticationFailure(body.errors))
          dispatch(finishFetchRequest())
        } else {
          localStorage.setItem('user', JSON.stringify(body))
          localStorage.setItem('token', body.token);
          dispatch(setCurrentUser(body))
          dispatch(finishFetchRequest())
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export const authenticate = () => {
  return dispatch => {
    dispatch(authenticationRequest());
    AuthService.authenticate()
    .then(body => {
      localStorage.setItem('token', body.token);
      dispatch(setCurrentUser(body))
    })
    .catch(err => {
      console.log(err)
      localStorage.removeItem('token');
      window.location = '/login';
    });
  }
}

export const signup = (user) => {
  return dispatch => {
    dispatch(makeFetchRequest())
    dispatch(authenticationRequest())
    AuthService.signup(user)
    .then(body => {
      if (body.errors) {
        dispatch(authenticationFailure(body.errors))
        dispatch(finishFetchRequest())
      } else if (!body.errors && !body.user) {
        dispatch(authenticationFailure(body))
        dispatch(finishFetchRequest())
      } else {
        console.log(body)
        console.log(body.token)
        console.log(body.user)
        localStorage.setItem('token', body.token);
        dispatch(setCurrentUser(body.user));
        dispatch(finishFetchRequest())
      }
    })
    .catch(err => {
      console.log(err)
    })
  }
}
