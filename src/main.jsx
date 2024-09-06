import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GidApp } from './GidApp'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GidApp />
  </StrictMode>,
)
