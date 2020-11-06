import React, { useEffect, useState } from 'react'

import { getTimeListData } from '../../utils/manage-stamps'

function List() {
  const [timeList, setTimeList] = useState(getTimeListData())

  useEffect(() => {
    setTimeout(() => setTimeList(getTimeListData()), 1000)
  })

  return (
    <ul>
      {timeList.map(tl => <li key={tl.id}>{tl.currentDate}, {tl.value}</li>)}
    </ul>
  )
}

export default List