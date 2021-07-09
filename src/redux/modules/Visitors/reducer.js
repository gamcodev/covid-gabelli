export default (state = [], action) => {
  switch(action.type) {

    case 'SUCCESSFUL_VISITORS_FETCH':
      return {
        ...state,
        visitors: action.visitors
      }
    default:
      return state
  }
}
