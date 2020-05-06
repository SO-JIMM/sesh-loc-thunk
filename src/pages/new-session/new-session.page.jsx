import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// import { firestore } from '../../firebase/firestore'
import LocationItem from '../../components/location/location-item.component'
import { selectCurrentPatient } from '../../redux/patient/patient.selector'
import { selectLocations } from '../../redux/session/session.selector'

const mapState = createStructuredSelector({
  currentPatient: selectCurrentPatient,
  locations: selectLocations,
})

class NewSessionPage extends React.Component {
  render() {
    const { currentPatient, locations } = this.props
    return (
      <div className="page new-session-page">
        <div className="svg-container">
          <svg viewBox="0 0 400 579" height="579" width="400">
            <g id="layer1">
              <path
                id="deltoid"
                d="M 314.4382,10.842697 249.38202,67.947566 195.16854,126.49813 190.10861,92.524345 198.05993,55.659176 223.35955,22.40824 263.83895,7.9513109 Z"
              >
                <title id="title914">Deltoid</title>
              </path>
              <path
                id="palmaris"
                d="m 139.50936,352.02622 -28.91385,39.75655 7.22846,7.95131 35.41948,-42.64794 17.34831,-35.41947 z"
              >
                <title id="title4621">Palmaris</title>
              </path>
              <path
                id="exCarpiRadialis"
                d="m 164.08614,222.6367 -2.16854,53.49064 -26.02247,58.55056 -31.0824,32.52809 13.73409,-54.93633 10.84269,-37.58801 z"
              >
                <title id="title4625">Ex. Carpi Radialis</title>
              </path>
              <path
                id="flRetinaculum"
                d="m 88.910112,391.78277 -5.782771,15.90262 15.179775,1.4457 12.288394,-17.34832 z"
              >
                <title id="title4629">Fl. Retinaculum</title>
              </path>
              <path
                id="palmarAponeurosis"
                d="m 117.82397,474.18727 -61.441948,-9.39701 54.213488,-73.00749 7.22846,7.95131 -14.45693,30.35955 z"
              >
                <title id="title4633">Palmar Aponeurosis</title>
              </path>
              <path
                id="pronatorTeres"
                d="m 168.42322,251.55056 -6.50562,24.57678 29.63671,-26.74532 -2.89139,-7.95131 z"
              >
                <title id="title4637">Pronator Teres</title>
              </path>
              <path
                id="brachialis"
                d="m 232.03371,190.83146 -30.35955,27.46817 21.68539,28.91385 8.67416,-19.51685 z"
              >
                <title id="title4641">Brachialis</title>
              </path>
              <path
                id="bicepsBrachii"
                d="m 195.16854,126.49813 -31.0824,96.13857 37.58802,-4.33707 30.35955,-27.46817 17.34831,-28.91386 5.78277,-80.958799 -23.85393,5.782772 z"
              >
                <title id="title4647">Biceps Brachii</title>
              </path>
              <path
                id="triceps"
                d="m 232.03371,227.69663 22.40824,-47.70787 -5.05993,-18.07116 -17.34831,28.91386 z"
              >
                <title id="title4651">Triceps</title>
              </path>
              <path
                id="pectoralis"
                d="m 255.16479,80.958801 22.40824,54.936329 49.87641,15.17978 52.04494,-29.63671 5.05993,-39.756552 -23.85394,-68.670412 -46.26217,-2.168539 -49.15356,53.490636 z"
              >
                <title id="title4655">Pectoralis Major</title>
              </path>
              <path
                id="obliques"
                d="m 268.17603,179.26592 5.05993,42.64794 7.95131,67.22472 35.41947,-5.78277 -7.95131,-14.45693 7.22847,-22.40824 -4.33708,-16.62547 6.50561,-13.73408 -8.67415,-24.57678 9.397,-25.29963 -13.73408,-9.397 -35.41948,-24.57678 z"
              >
                <title id="title4659">Obliques</title>
              </path>
              <path
                id="flCarpiUl"
                d="m 135.17228,408.40824 -17.34831,-8.67416 44.09363,-53.49063 8.67416,-24.57678 35.41948,-62.1648 13.01123,15.90262 -39.75655,67.22472 -10.8427,14.45693 z"
              >
                <title id="title4663">Fl. Carpi Ulnaris</title>
              </path>
              <path
                id="path4665"
                d="m 141.6779,323.83521 -5.78277,10.84269 -31.80524,52.76779 6.50562,4.33708 28.91385,-39.75655 39.03371,-41.9251 27.46817,-50.59925 -14.45693,-10.11985 -29.63671,26.74532 z"
              >
                <title id="title4667">Fl. Carpi Radalis</title>
              </path>
              <path
                id="pollicisBrevis"
                d="m 57.827715,423.58801 -24.576779,20.96255 22.40824,9.39701 13.011236,-5.05993 12.288389,-22.40824 z"
              >
                <title id="title4671">Pollicis Brevis</title>
              </path>
            </g>
          </svg>
        </div>
        <div className="location-dropdown">
          {currentPatient && <h3>{currentPatient.patientName}</h3>}
          <div className="location-items">
            {locations.length ? (
              locations.map((locationItem) => (
                <LocationItem
                  key={locationItem.id}
                  location={locationItem.location}
                />
              ))
            ) : (
              <span className="empty-message">No Locations</span>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapState)(NewSessionPage)
