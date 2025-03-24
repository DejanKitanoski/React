import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'



//ova e  od react-dome 
// povikane komponenti se so zelena boja
// <StrictMode> e komponenta defolt za debagiranje koja gi koristi 2 pati rabotitite gi vrti dva pati 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
