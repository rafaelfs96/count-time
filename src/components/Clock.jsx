import './Clock.scss'
import React, { useState, useEffect } from 'react'

import { time, format } from '../utils/time'

export default props => {
  const [date, setTime] = useState(time())

  useEffect(() => {
    updateTime()
  })

  const updateTime = () => {
    setTimeout(() => setTime(time()), 500)
  }

  const { day, month, year, hour, minute, second } = format(date)

  return (
    <React.Fragment>
      <h1 className='content'>
        <time className='content__time' dateTime={ `${hour}:${minute}:${second}` }>
          { `${hour}:${minute}:${second}` }
        </time>
        <time className='content__date' dateTime={ `${month}/${day}/${year}` }>
          { `${month}/${day}/${year}` }
        </time>
      </h1>
    </React.Fragment>
  )
}