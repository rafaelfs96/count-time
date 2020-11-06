import styles from './TimeList.module.scss'
import React, { useEffect, useState } from 'react'

import { getTimeListData } from '../../utils/manage-stamps'

function TimeList() {
  const [timeList, setTimeList] = useState(getTimeListData())

  useEffect(() => {
    updateList()
  })

  const updateList = () => {
    setTimeout(() => setTimeList(getTimeListData()), 1000)
  }

  return (
    <ul className={styles.TimeList}>
      {timeList.map(tl => (
        <li className={styles.TimeList__item} key={tl.id}>
          {/* {tl.currentDate}, {tl.value} */}
          <time dateTime={tl.currentDate}>
            {tl.value}
          </time>
        </li>
      ))}
    </ul>
  )
}

export default TimeList