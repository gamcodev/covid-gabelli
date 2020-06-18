import { API_URL, HEADERS } from '../constants'


const AuthService = {

  signup(user) {
    return fetch(`${API_URL}/users`, {
      method: 'POST',
      headers: HEADERS(),
      body: JSON.stringify({ user })
    })
    .then(response => response.json())
  },

  login(user) {
    return fetch(`${API_URL}/users/login`, {
      method: 'POST',
      credentials: 'include',
      headers: HEADERS(),
      body: JSON.stringify({ user })
    })
      .then(response => response.json())
  },

  authenticate() {
    return fetch(`${API_URL}/users/refresh`, {
        method: 'POST',
        credentials: 'include',
        headers: HEADERS(),
      })
      .then(response => response.json())
  },

  logout(){
    return fetch(`${API_URL}/users/logout`, {
      method: 'DELETE',
      headers: HEADERS(),
      credentials: 'include',
    })
    .then(response => response.json())
  }



}

export default AuthService
