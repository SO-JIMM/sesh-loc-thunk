import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// import { firestore } from '../../firebase/firestore'
import LocationDropdown from '../../components/location/location-dropdown.component'
import { selectCurrentPatient } from '../../redux/patient/patient.selector'
import { selectLocations } from '../../redux/session/session.selector'

const mapState = createStructuredSelector({
  currentPatient: selectCurrentPatient,
  locations: selectLocations,
})

class NewSession extends React.Component {
  render() {
    const { currentPatient, locations } = this.props
    return (
      <div className="new-session">
        <div>
          <p>Patient Name: {currentPatient.patientName}</p>
          <p>Email: {currentPatient.patientEmail}</p>
        </div>
        <LocationDropdown
          locationItems={locations}
          currentPatient={currentPatient}
        />
      </div>
    )
  }
}

export default connect(mapState)(NewSession)
