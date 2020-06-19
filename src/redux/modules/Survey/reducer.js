export default (state = [], action) => {
  switch(action.type) {

    case 'SUCCESSFUL_SURVEYS_FETCH':
      return {
        ...state,
        surveys: action.surveys
      }

    case 'SUCCESSFUL_SURVEY_FETCH':
      return {
        ...state,
        survey: action.survey
      }

    case 'UNSUCCESSFUL_SURVEY_CREATE':
      return {
        ...state,
        errors: action.errors
      }

    case 'UNSUCCESSFUL_SURVEYS_FETCH':
      return {
        ...state,
        errors: action.errors
      }
      
    default:
      return state
  }
}
