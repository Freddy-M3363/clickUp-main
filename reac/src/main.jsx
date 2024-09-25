import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import 'tailwindcss/dist/base.min.css';
// import 'tailwindcss/dist/components.min.css';
// import 'tailwindcss/dist/utilities.min.css';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
