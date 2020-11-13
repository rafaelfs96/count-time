import './App.scss'
import React, { useState } from 'react'

import Header from './Header/Header'
import Footer from './Footer/Footer'
import Main from './Main/Main'

function App() {
  const defaultTheme = localStorage.getItem('theme') || 'dark'
  const [theme, setTheme] = useState(defaultTheme)

  return (
    <div className={['App', `theme-${theme}`].join(' ')}>
      <Header setTheme={setTheme} theme={theme} />
      <Main />
      <Footer />
    </div>
  );
}

export default App
