import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { firestore } from '../../firebase/firestore'

export const fetchPatients = createAsyncThunk(
  'patient/fetchPatientsStatus',
  () => {
    const response = firestore
      .collection('patients')
      .get()
      .then((snapshot) => {
        const patientsMapped = snapshot.docs.map((doc) => doc.data())
        return patientsMapped
      })
    return response
  }
)

const patientSlice = createSlice({
  name: 'patient',
  initialState: {
    patients: [],
    loading: 'idle',
    error: null,
    currentPatient: null,
  },
  reducers: {
    setCurrentPatient: (state, action) => {
      state.currentPatient = action.payload
    },
  },
  extraReducers: {
    [fetchPatients.pending]: (state) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    },
    [fetchPatients.fulfilled]: (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.patients = action.payload
      }
    },
    [fetchPatients.rejected]: (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.error = action.error
      }
    },
  },
})

export const {
  patientListReceived,
  setCurrentPatient,
  clearCurrentPatient,
} = patientSlice.actions

export default patientSlice.reducer
