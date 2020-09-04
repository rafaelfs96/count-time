import React, { useState } from 'react'
import { time, format, timeBetween } from '../utils/time'

import DatePicker from './DatePicker'
import Presentation from './Presentation'

export default props => {
  const { year, month, day, hour, minute } = format(time())
  const startTime = `${year}-${month}-${day}T08:00`
  const endTime = `${year}-${month}-${day}T${hour}:${minute}`

  const [start, setStart] = useState({ date: startTime, useNow: false })
  const [end, setEnd] = useState({ date: endTime, useNow: false })
  const [difference, setDifference] = useState('')

  const updateDifference = () => {
    const sdate = start.useNow ? new Date() : new Date(start.date)
    const edate = end.useNow ? new Date() : new Date(end.date)

    const updatedDifference = timeBetween({startDate: sdate, endDate: edate})
    setDifference(updatedDifference)
  }

  return (
    <div>
      <DatePicker text='Data Inicial' id='startDate' value={ start.date } useNow={ start.useNow } change={ setStart } />
      <DatePicker text='Data Final' id='endDate' value={ end.date } useNow={ end.useNow } change={ setEnd } />
      <button onClick={ updateDifference }>calculate difference</button>
      <Presentation time={ difference } />
    </div>
  )
}
