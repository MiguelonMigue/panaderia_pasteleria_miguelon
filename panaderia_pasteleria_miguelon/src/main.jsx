import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import {AlimentosProvider} from './context/AlimentosContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/panaderia_pasteleria_miguelon'>
    <AlimentosProvider>
    <App />
    </AlimentosProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
