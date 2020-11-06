import styles from './App.module.scss'
import React from 'react'

import Clock from './Clock/Clock'
import TimeBetween from './TimeBetween/TimeBetween'
import List from './TimeList/List'

function App() {
  return (
    <div className={ styles.App }>
      <Clock />
      <TimeBetween />
      <List />
    </div>
  );
}

export default App
