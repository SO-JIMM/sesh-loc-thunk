import { createSlice } from '@reduxjs/toolkit'

const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    patientSessionList: [],
    currentPatientSession: null,
    locations: [],
    locationNotes: [],
  },
  reducers: {},
})

export const {} = sessionSlice.actions

export default sessionSlice.reducer
