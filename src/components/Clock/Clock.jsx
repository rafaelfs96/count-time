import './Clock.scss'
import React, { useState, useEffect } from 'react'

import { time, format } from '../../utils/time'

function Clock() {
  const [date, setTime] = useState(time())

  useEffect(() => {
    const interval = setInterval(() => setTime(time()), 500)

    return () => clearInterval(interval)
  }, [])

  const { day, month, year, hour, minute, second } = format(date)

  return (
    <React.Fragment>
      <h1 className='Clock'>
        <time className='Clock__time' dateTime={ `${hour}:${minute}:${second}` }>
          { `${hour}:${minute}:${second}` }
        </time>
        <time className='Clock__date' dateTime={ `${month}/${day}/${year}` }>
          { `${month}/${day}/${year}` }
        </time>
      </h1>
    </React.Fragment>
  )
}

export default Clock