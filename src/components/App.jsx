import styles from './App.module.scss'
import React from 'react'

import Clock from './Clock'
import TimeBetween from './TimeBetween'

function App() {
  return (
    <div className={ styles.App }>
      <Clock />
      <TimeBetween />
    </div>
  );
}

export default App
