import { API_URL, HEADERS } from '../constants'


const CovidResponseService = {

  createCert(data, userId) {
    console.log(data, userId)
    return fetch(`${API_URL}/covid_responses`, {
      method: 'POST',
      headers: HEADERS(),
      credentials: 'include',
      body: JSON.stringify({ data, userId })
    })
    .then(response => response.json())
  },

}

export default CovidResponseService
