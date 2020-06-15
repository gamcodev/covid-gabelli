import CovidResponseService from '../../../services/CovidResponseService'

const successfulCertFetch = cert => {
  return {
    type: "SUCCESSFUL_CERT_FETCH",
    cert
  }
}

const unsuccessfulCertCreate = (errors) => {
  return {
    type: "UNSUCCESSFUL_CERT_CREATE",
    errors
  }
}


export const createCert = (data, userId) => {
  return dispatch => {
    CovidResponseService.createCert(data, userId)
    .then(cert => {
      if(cert.errors) {
        dispatch(unsuccessfulCertCreate(cert.errors))
      } else {
        dispatch(successfulCertFetch(cert))
      }
    })
  }
}
