import SurveyResponseService from '../../../services/SurveyResponseService'
import {
  makeFetchRequest,
  finishFetchRequest,
  unsuccessfulFetchRequest
} from '../../appTransactions';

const successfulSurveysFetch = surveys => {
  return {
    type: "SUCCESSFUL_SURVEYS_FETCH",
    surveys
  }
}

// const unsuccessfulSurveyCreate = (errors) => {
//   return {
//     type: "UNSUCCESSFUL_SURVEY_CREATE",
//     errors
//   }
// }

export const fetchSurveys = () => {
  return dispatch => {
    dispatch(makeFetchRequest())
    SurveyResponseService.fetchSurveys()
    .then(surveys => {
      if(surveys.errors) {
        dispatch(unsuccessfulFetchRequest(surveys.errors))
      } else {
        dispatch(successfulSurveysFetch(surveys))
        dispatch(finishFetchRequest())
      }
    })
  }
}

export const createSurvey = (data, userId) => {
  return dispatch => {
    SurveyResponseService.createSurvey(data, userId)
    .then(survey => {
      if (survey) {
        console.log(survey)
      //   dispatch(unsuccessfulSurveyCreate(survey.errors))
      // } else {
      //   dispatch(successfulSurveyFetch(survey))
      }
    })
  }
}
