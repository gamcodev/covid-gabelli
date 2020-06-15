import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { reducer as form } from 'redux-form'


import auth from './modules/Auth/reducer'
import cert from './modules/Cert/reducer'

const reducers = combineReducers({
  form,
  auth,
  cert
})

export default createStore(
  reducers,
  applyMiddleware(thunk),
)
