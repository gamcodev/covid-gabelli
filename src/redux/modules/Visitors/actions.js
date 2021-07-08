import VisitorService from '../../../services/VisitorService'
import {
  makeFetchRequest,
  finishFetchRequest,
  unsuccessfulFetchRequest
} from '../../appTransactions';


const successfulVisitorsFetch = visitors => {
  return {
    type: "SUCCESSFUL_VISITORS_FETCH",
    visitors
  }
}



export const fetchVisitors = () => {
  return dispatch => {
    dispatch(makeFetchRequest())
    VisitorService.getVisitors()
    .then(visitors => {
      if(visitors.errors) {
        dispatch(unsuccessfulFetchRequest(visitors.errors))
      } else {
        dispatch(finishFetchRequest())
        dispatch(successfulVisitorsFetch(visitors))
      }
    })
  }
}

