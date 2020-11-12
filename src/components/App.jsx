import styles from './App.module.scss'
import React, { useState } from 'react'

import Header from './Header/Header'
import Footer from './Footer/Footer'
import Clock from './Clock/Clock'
import TimeBetween from './TimeBetween/TimeBetween'

function App() {
  const defaultTheme = localStorage.getItem('theme') || 'dark'
  const [theme, setTheme] = useState(defaultTheme)

  return (
    <div className={[styles.App, `theme-${theme}`].join(' ')}>
      <Header setTheme={setTheme} theme={theme} />
      <Clock />
      <TimeBetween />
      <Footer />
    </div>
  );
}

export default App
