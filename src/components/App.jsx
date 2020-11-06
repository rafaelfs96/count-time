import styles from './App.module.scss'
import React from 'react'

import Clock from './Clock/Clock'
import TimeBetween from './TimeBetween/TimeBetween'
import TimeList from './TimeList/TimeList'

function App() {
  return (
    <div className={ styles.App }>
      <Clock />
      <TimeBetween />
      <TimeList />
    </div>
  );
}

export default App
