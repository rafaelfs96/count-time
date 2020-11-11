import './styles/app.scss'

import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorkerRegistration.register()
reportWebVitals()