import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { setCurrentPatient } from '../../../redux/patient/patient.slice'

const mapDispatch = { setCurrentPatient }

const PatientCard = ({ patient, setCurrentPatient }) => {
  const { patientName, patientEmail } = patient
  const handlePatientCardClick = () => {
    setCurrentPatient(patient)
  }
  return (
    <div className="patient-card-container" onClick={handlePatientCardClick}>
      <Link to="/newsession">
        <h2> {patientName} </h2>
        <p> {patientEmail} </p>
      </Link>
    </div>
  )
}

export default connect(null, mapDispatch)(PatientCard)
