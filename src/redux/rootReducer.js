import { combineReducers } from 'redux'

import patientReducer from './patient/patient.slice'
import userReducer from './user/user.slice'
import sessionReducer from './session/session.slice'

export default combineReducers({
  patient: patientReducer,
  user: userReducer,
  session: sessionReducer,
})
