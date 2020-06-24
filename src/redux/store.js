import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { reducer as form } from 'redux-form'

import appTransactions from './appTransactions'
import auth from './modules/Auth/reducer'
import cert from './modules/Cert/reducer'
import users from './modules/Users/reducer'
import survey from './modules/Survey/reducer'

const reducers = combineReducers({
  appTransactions,
  form,
  auth,
  cert,
  users,
  survey
})

export default createStore(
  reducers,
  applyMiddleware(thunk),
)
