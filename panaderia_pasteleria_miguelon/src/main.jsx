import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter } from 'react-router-dom'
import AlimentosProvider from './context/AlimentosContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AlimentosProvider>
    <App />
    </AlimentosProvider>
    
  </React.StrictMode>,
)
