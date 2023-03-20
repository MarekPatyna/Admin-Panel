import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { registerLicense } from '@syncfusion/ej2-base'

const key = process.env.REACT_APP_SYNCFUSION_LICENSE_KEY
registerLicense(key)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
)
