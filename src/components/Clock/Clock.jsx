import styles from './Clock.module.scss'
import React, { useState, useEffect } from 'react'

import { time, format } from '../../utils/time'

function Clock() {
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
      <h1 className={styles.content}>
        <time className={styles.content__time} dateTime={ `${hour}:${minute}:${second}` }>
          { `${hour}:${minute}:${second}` }
        </time>
        <time className={styles.content__date} dateTime={ `${month}/${day}/${year}` }>
          { `${month}/${day}/${year}` }
        </time>
      </h1>
    </React.Fragment>
  )
}

export default Clock