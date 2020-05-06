import React from 'react'
import DatePicker from 'react-datepicker'

const DatePickerFormInput = ({ handleChange, selected }) => (
  <div className="group">
    <DatePicker
      dateFormat="dd/MM/yyyy"
      placeholderText="Click to select a date"
      selected={selected}
      onChange={handleChange}
      className="date-picker-form-input"
    />
  </div>
)

export default DatePickerFormInput
