import React from 'react'
import ReactDOM from 'react-dom'
import './stylesheets/index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

console.log('App started')
console.log('process.env', process.env)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
