import React from 'react'
import { connect } from 'react-redux'
import { PatientList } from '../patient-list/patient-list.component'
import NewSession from '../../session/new-session.component'
// import { firestore } from '../../../firebase/firestore'

import { fetchPatients } from '../../../redux/patient/patient.slice'
import { createStructuredSelector } from 'reselect'
import {
  selectPatients,
  selectCurrentPatient,
} from '../../../redux/patient/patient.selector'

const mapState = createStructuredSelector({
  patients: selectPatients,
  currentPatient: selectCurrentPatient,
})

const mapDispatch = { fetchPatients }

class GetPatients extends React.Component {
  componentDidMount() {
    const { fetchPatients } = this.props
    fetchPatients()
  }

  render() {
    const { patients, currentPatient } = this.props
    return (
      <div className="get-patients">
        {currentPatient ? <NewSession /> : <PatientList patients={patients} />}
      </div>
    )
  }
}

export default connect(mapState, mapDispatch)(GetPatients)
