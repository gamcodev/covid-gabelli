import CovidResponseService from '../../../services/CovidResponseService'
import {
  makeFetchRequest,
  finishFetchRequest,
  unsuccessfulFetchRequest
} from '../../appTransactions';


const successfulCertFetch = cert => {
  console.log(cert)
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
    dispatch(makeFetchRequest())
    CovidResponseService.createCert(data, userId)
    .then(cert => {
      if(cert.errors) {
        dispatch(unsuccessfulFetchRequest(cert.errors))
        dispatch(unsuccessfulCertCreate(cert.errors))
      } else {
        dispatch(finishFetchRequest())
        dispatch(successfulCertFetch(cert))
      }
    })
  }
}

export const createVisitor = (data) => {
  return dispatch => {
    dispatch(makeFetchRequest())
    CovidResponseService.createVisitor(data)
    .then(cert => {
      if(cert.errors) {
        dispatch(unsuccessfulFetchRequest(cert.errors))
        dispatch(unsuccessfulCertCreate(cert.errors))
      } else {
        dispatch(finishFetchRequest())
        dispatch(successfulCertFetch(cert))
      }
    })
  }
}
