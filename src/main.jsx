import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { ParticipationProvider } from './context/ParticipationContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthContextProvider>
    <ParticipationProvider>
       <App />
    </ParticipationProvider>
   
  </AuthContextProvider>
                
  </React.StrictMode>,
)
