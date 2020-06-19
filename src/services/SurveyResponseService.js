import { API_URL, HEADERS } from '../constants'


const SurveyResponseService = {

  fetchSurveys() {
    return fetch(`${API_URL}/support_survey_responses`,{
      headers: HEADERS(),
    })
    .then(response => response.json())
  },

  createSurvey(data, userId) {
    return fetch(`${API_URL}/support_survey_responses`, {
      method: 'POST',
      headers: HEADERS(),
      credentials: 'include',
      body: JSON.stringify({ data, userId })
    })
    .then(response => response.json())
  },

}

export default SurveyResponseService
