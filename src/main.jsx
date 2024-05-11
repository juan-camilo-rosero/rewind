import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { SectionContextProvider } from './context/SectionContext'
import { AuthContextProvider } from './context/AuthContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
    <SectionContextProvider>
      <App />
    </SectionContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
