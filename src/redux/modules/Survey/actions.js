import SurveyResponseService from '../../../services/SurveyResponseService'

const successfulSurveysFetch = surveys => {
  return {
    type: "SUCCESSFUL_SURVEYS_FETCH",
    surveys
  }
}
const successfulSurveyFetch = survey => {
  return {
    type: "SUCCESSFUL_SURVEY_FETCH",
    survey
  }
}

const unsuccessfulSurveyCreate = (errors) => {
  return {
    type: "UNSUCCESSFUL_SURVEY_CREATE",
    errors
  }
}

const unsuccessfulSurveysFetch = (errors) => {
  return {
    type: "UNSUCCESSFUL_SURVEYS_FETCH",
    errors
  }
}


export const fetchSurveys = () => {
  return dispatch => {
    SurveyResponseService.fetchSurveys()
    .then(surveys => {
      if(surveys.errors) {
        dispatch(unsuccessfulSurveysFetch(surveys.errors))
      } else {
        dispatch(successfulSurveysFetch(surveys))
      }
    })
  }
}

export const createSurvey = (data, userId) => {
  debugger
  return dispatch => {
    SurveyResponseService.createSurvey(data, userId)
    .then(survey => {
      if(survey.errors) {
        dispatch(unsuccessfulSurveyCreate(survey.errors))
      } else {
        dispatch(successfulSurveyFetch(survey))
      }
    })
  }
}
