import styles from './App.module.scss'
import React, { useState } from 'react'

import Header from './Header/Header'
import Clock from './Clock/Clock'
import TimeBetween from './TimeBetween/TimeBetween'

function App() {
  const [theme, setTheme] = useState('dark')

  return (
    <div className={styles.App}>
      <Header setTheme={setTheme} theme={theme} />
      <Clock />
      <TimeBetween />
    </div>
  );
}

export default App
