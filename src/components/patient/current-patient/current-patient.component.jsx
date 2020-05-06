import React from 'react'
import { v4 as uuidv4 } from 'uuid'
// import { firestore } from '../../../firebase/firestore'
import NewSession from '../../session/new-session.component'

const CurrentPatient = (props) => {
  const { patientId } = props

  return (
    <div className="current-patient">
      <NewSession patientId={patientId} />
    </div>
  )
}

export default CurrentPatient
