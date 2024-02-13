import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import axios from 'axios'
import { HelmetProvider } from 'react-helmet-async'


axios.defaults.baseURL = 'http://localhost:3000'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)
