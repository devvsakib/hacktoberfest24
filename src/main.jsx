import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './commontailwind.css'
import { BrowserRouter } from 'react-router-dom'
import Router from './routes/Routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </StrictMode>,
)
