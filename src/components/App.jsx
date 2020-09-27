import styles from './App.module.scss'
import React from 'react'

import Clock from './Clock/Clock'
import TimeBetween from './TimeBetween/TimeBetween'

function App() {
  return (
    <div className={ styles.App }>
      <Clock />
      <TimeBetween />
    </div>
  );
}

export default App
