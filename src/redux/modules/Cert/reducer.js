export default (state = [], action) => {
  switch(action.type) {

    case 'SUCCESSFUL_CERT_FETCH':
      return {
        ...state,
        cert: action.cert
      }
    case 'UNSUCCESSFUL_CERT_CREATE':
      return {
        ...state,
        errors: action.errors
      }
    default:
      return state
  }
}
