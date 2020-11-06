import 'react-datepicker/dist/react-datepicker.css'
import './InputDate.scss'

import DatePicker from 'react-datepicker'
import React from 'react'

function InputDate({
  dateFormat = 'MMMM d, yyyy h:mm aa',
  timeFormat = 'HH:mm',
  timeIntervals = 10,
  value, name, id, isDisable, onChange
}) {
  return (
    <DatePicker
      // showTimeSelect
      timeIntervals={ timeIntervals }
      selected={ value }
      dateFormat={ dateFormat }
      timeFormat={ timeFormat }
      name={ id }
      id={ id }
      showTimeInput
      timeInputLabel='Time:'
      disabled={ isDisable }
      onChange={ onChange }
    />
  )
}

export default InputDate