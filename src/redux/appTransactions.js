export const makeFetchRequest = () => {
  return {
    type: 'MAKING_API_REQUEST',
  }
}

export const finishFetchRequest = () => {
   return {
     type: 'FINISHED_API_REQUEST'
   }
}

export const unsuccessfulFetchRequest = () => {
   return {
     type: 'UNSUCCESSFUL_API_REQUEST'
   }
}

export const successfulExport = () => {
  return {
    type: 'SUCCESSFUL_EXPORT'
  }
}
export const successfullyExporting = () => {
  return {
    type: 'SUCCESSFULLY_EXPORTING'
  }
}


export default (state = {
  makingRequestToAPI: false,
  lastRequestFailed: false,
  exporting: false,
  exported: false,
}, action) => {
  switch (action.type) {

    case "MAKING_API_REQUEST":
      return {
        ...state,
        makingRequestToAPI: true
      }

    case "FINISHED_API_REQUEST":
      return {
        ...state,
        makingRequestToAPI: false
      }

    case "UNSUCCESSFUL_API_REQUEST":
      return {
        ...state,
        makingRequestToAPI: false,
        lastRequestFailed: true
      }

    case "SUCCESSFULLY_EXPORTING":
      return {
        ...state,
        exported: false,
        exporting: true
      }

    case "SUCCESSFUL_EXPORT":
      return {
        ...state,
        exported: true,
        exporting: false
      }

    default:
      return state
  }
}
