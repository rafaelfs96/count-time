import 'react-datepicker/dist/react-datepicker.css'
import './InputDate.scss'

import DatePicker from 'react-datepicker'
import React from 'react'

export default ({
  dateFormat = 'MMMM d, yyyy h:mm aa',
  timeFormat = 'HH:mm',
  timeIntervals = 10,
  value, name, id, isDisable, onChange
}) => {
  const CustomInput = ({ value, onClick, disabled }) => (
    <input
      disabled={ disabled }
      className='CustomInput'
      type='text'
      onClick={ onClick }
      value={ value }
    />
  )
  return (
    <DatePicker
      // showTimeSelect
      customInput={ <CustomInput /> }
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
