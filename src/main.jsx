import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Stateprovider } from './assets/Componets/Contextapi/contextapi.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Stateprovider>
  <BrowserRouter>
  
  <React.StrictMode>
   
    <App />
  </React.StrictMode>,
  </BrowserRouter>
  </Stateprovider>
)
