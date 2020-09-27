import 'react-datepicker/dist/react-datepicker.css'

import DatePicker from 'react-datepicker'
import React from 'react'

export default ({
  dateFormat = 'MMMM d, yyyy h:mm aa',
  timeFormat = 'HH:mm',
  timeIntervals = 10,
  value, name, id, isDisable,
  onChange
}) => {
  return (
    <DatePicker
      showTimeSelect
      timeIntervals={ timeIntervals }
      selected={ value }
      dateFormat={ dateFormat }
      timeFormat={ timeFormat }
      name={ id }
      id={ id }
      disabled={ isDisable }
      onChange={ onChange }
    />
  )
}


