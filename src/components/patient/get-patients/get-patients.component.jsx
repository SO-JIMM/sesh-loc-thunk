import React from 'react'
import { connect } from 'react-redux'
import { PatientList } from '../patient-list/patient-list.component'
import { useDispatch } from 'react-redux'
import { fetchPatientList } from '../../../redux/patient/patient.slice'
import { createStructuredSelector } from 'reselect'
import { selectPatientList } from '../../../redux/patient/patient.selector'

const dispatch = useDispatch()

const mapState = createStructuredSelector({
  patientList: selectPatientList,
})

const mapDispatch = { fetchPatientList }

class GetPatients extends React.Component {
  componentDidMount() {
    dispatch(fetchPatientList())
  }

  render() {
    const { patientList } = this.props
    return (
      <div className="get-patients">
        <PatientList patients={patientList} />
      </div>
    )
  }
}

export default connect(mapState, mapDispatch)(GetPatients)
