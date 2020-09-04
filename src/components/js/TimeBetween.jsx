import React, { useState, useEffect } from 'react'
import { time, format } from '../../utils/time'

export default props => {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [difference, setDifference] = useState('')

  useEffect(() => {
    const { year, month, day, hour, minute } = format(time())
    setStartDate(`${year}-${month}-${day}T${hour}:${minute}`)
    setEndDate(`${year}-${month}-${day}T${hour}:${minute}`)
  }, [])

  const timeBetween = ({startDate = new Date(), endDate = new Date()}) => {
    console.log(startDate, endDate)
    let delta = Math.abs(endDate - startDate) / 1000
    const isNegative = startDate > endDate ? -1 : 1
    const daysOfMonth = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0).getDate()
  
    const time = [
      ['months', 7 * 24 * 60 * 60 * daysOfMonth],
      ['weeks', 7 * 24 * 60 * 60],
      ['days', 24 * 60 * 60],
      ['hours', 60 * 60],
      ['minutes', 60],
      ['seconds', 1]
    ].reduce((acc, [key, value]) => {
      let temp = Math.floor(delta / value)
      if (temp === 0) return acc
      else return (acc[key] = temp * isNegative, delta -= acc[key] * isNegative * value, acc)
    }, {})
  
    setDifference(time)
  }

  const updateDifference = () => {
    let sData = new Date(startDate)
    let eData = new Date(endDate)
    timeBetween({startDate: sData, endDate: eData})
  }

  return (
    <div style={{display: 'flex'}}>
      <input type="datetime-local" id="startDate" name="startDate" value={ startDate } onChange={ evt => { setStartDate(evt.target.value) } } />
      <input type="datetime-local" id="endDate" name="endDate" value={ endDate } onChange={ evt => { setEndDate(evt.target.value) } } />
      <button onClick={ updateDifference }>click</button>
      <p>{ difference }</p>
    </div>
  )
}
