import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { firestore } from '../../firebase/firestore'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'
import DatePickerFormInput from '../date-picker-form-input/date-picker-form-input.component'

const AddNewPatient = () => {
  const [patientName, setPatientName] = useState('')
  const [patientDob, setPatientDob] = useState('')

  const onNameChangeHandler = (e) => {
    setPatientName(e.target.value)
  }

  const handleDobChange = (date) => {
    setPatientDob(date)
  }

  const createNewPatientDocument = async () => {
    const patientId = uuidv4()
    const createdAt = new Date()

    const newPatient = {
      patientId: patientId,
      patientName: patientName,
      patientDob: patientDob.toLocaleDateString(),
      createdAt: createdAt,
    }

    const collectionRef = firestore.collection('patients')
    const patientRef = collectionRef.doc(`${patientId}`)

    const patientSnapShot = await patientRef.get()

    if (!patientSnapShot.exists) {
      try {
        await patientRef.set(newPatient)
      } catch (error) {
        console.log('error creating user', error.message)
      }
    }

    return patientRef
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()

    createNewPatientDocument()

    setPatientName('')
    setPatientDob('')
    console.log('Patient added to the database!')
  }
  return (
    <div className="sign-up">
      <h2 className="title">Add New Patient</h2>
      <form className="new-patient-form" onSubmit={onSubmitHandler}>
        <FormInput
          name="patientName"
          onChange={onNameChangeHandler}
          label="Patient Name"
          value={patientName}
        />
        <DatePickerFormInput
          selected={patientDob}
          handleChange={handleDobChange}
        />
        <CustomButton type="submit">Add New Patient</CustomButton>
      </form>
    </div>
  )
}

export default AddNewPatient
