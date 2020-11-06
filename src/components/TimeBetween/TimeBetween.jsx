import React, { useState } from 'react'
import { timeBetween } from '../../utils/time'
import { addToTimeListData } from '../../utils/manage-stamps'

import DatePicker from '../DatePicker/DatePicker'
import TimeBetweenStyles from './TimeBetween.module.scss'
import Presentation from '../Presentation/Presentation'
import Button from '../../common/Button/Button'

function TimeBetween() {
  const [start, setStart] = useState({ date: new Date(), useNow: false })
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

    addToTimeListData({value: updatedResults})
  }

  return (
    <React.Fragment>
      <div className={TimeBetweenStyles.datepicker}>
        <DatePicker text='Data Inicial' id='startDate' value={ start.date }
          useNow={ start.useNow } change={ setStart } scss={ TimeBetweenStyles.datepicker__calendar } />
        <DatePicker text='Data Final' id='endDate' value={ end.date }
          useNow={ end.useNow } change={ setEnd } scss={ TimeBetweenStyles.datepicker__calendar } />  
      </div>

      <Button onClick={ updateResults } value='calculate' type='primary' />
      <Presentation time={ results } />
    </React.Fragment>
  )
}

export default TimeBetween