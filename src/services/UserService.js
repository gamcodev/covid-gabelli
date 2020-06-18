import { API_URL, HEADERS } from '../constants'

const UserService = {

  fetchUsers() {
    return fetch(`${API_URL}/users`, {
      headers: HEADERS(),
    })
    .then(response => response.json())
  },

  fetchUsersByDate(date) {
    return fetch(`${API_URL}/users/date`, {
      method: 'POST',
      headers: HEADERS(),
      body: JSON.stringify({ date })
    })
    .then(response => response.json())
  }

}

export default UserService
