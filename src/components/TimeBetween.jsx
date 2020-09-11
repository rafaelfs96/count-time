import React, { useState } from 'react'
import { formattedTime, timeBetween } from '../utils/time'

import DatePicker from './DatePicker'
import DatePickerStyles from './DatePicker.module.scss'
import Presentation from './Presentation'
import Button from '../common/Button'

export default props => {
  const { year, month, day, hour, minute } = formattedTime()

  const [start, setStart] = useState({ date: `${year}-${month}-${day}T${hour}:${minute}`, useNow: false })
  const [end, setEnd] = useState({ date: '', useNow: true })
  const [results, setResult] = useState('')

  const updateResults = () => {
    if((!start.date && !start.useNow) || (!end.date && !end.useNow)) {
      setResult('Selecione um horário válido')
      return 
    }
    const sdate = start.useNow ? new Date() : new Date(start.date)
    const edate = end.useNow ? new Date() : new Date(end.date)

    const updatedResults = timeBetween({startDate: sdate, endDate: edate})
    setResult(updatedResults)
  }

  return (
    <React.Fragment>
      <div className={DatePickerStyles.datepicker}>
        <DatePicker text='Data Inicial' id='startDate' value={ start.date }
          useNow={ start.useNow } change={ setStart } scss={ DatePickerStyles.datepicker__calendar } />
        <DatePicker text='Data Final' id='endDate' value={ end.date }
          useNow={ end.useNow } change={ setEnd } scss={ DatePickerStyles.datepicker__calendar } />  
      </div>

      <Button click={ updateResults } text='calculate difference' type='primary' />
      <Presentation time={ results } />
    </React.Fragment>
  )
}
