import React from 'react'
import PatientCard from '../patient-card/patient-card.component'

export const PatientList = (props) => (
  <div className="patient-list">
    {props.patients.map((patient) => (
      <PatientCard key={patient.id} patient={patient} />
    ))}
  </div>
)
