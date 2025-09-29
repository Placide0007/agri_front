import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "typeface-poppins";
import "typeface-nunito";
import "typeface-inter";
import './index.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import App from './App.jsx'
import Auth from './Context/Auth'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth>
      <App />
    </Auth>
  </StrictMode>,
)
