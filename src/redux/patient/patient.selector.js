import { createSelector } from 'reselect'

const selectPatient = (state) => state.patient

export const selectPatients = createSelector(
  [selectPatient],
  (patient) => patient.patients
)

export const selectCurrentPatient = createSelector(
  [selectPatient],
  (patient) => patient.currentPatient
)
