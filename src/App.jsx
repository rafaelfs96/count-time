import './reset.scss'
import './App.scss'
import React from 'react'

import Clock from './components/Clock'
import TimeBetween from './components/TimeBetween'

function App() {
  return (
    <div className="App">
      <Clock />
      <TimeBetween />
    </div>
  );
}

export default App
