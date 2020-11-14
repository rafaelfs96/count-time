import './Main.scss'
import React from 'react'

import Clock from '../Clock/Clock'
import TimeBetween from '../TimeBetween/TimeBetween'

function Main () {
  return (
    <div className='Main'>
      <Clock />
      <TimeBetween />
    </div>
  )
}

export default Main