import { API_URL, HEADERS } from '../constants'


const VisitorService = {

  getVisitors() {
    return fetch(`${API_URL}/visitors`)
    .then(response => response.json())
  },

}

export default VisitorService
