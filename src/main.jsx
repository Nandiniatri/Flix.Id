import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UseHeaderCenterProvider from './contextApi/UseHeaderCenter.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UseHeaderCenterProvider>
      <App />
    </UseHeaderCenterProvider>
  </StrictMode>,
)
