import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Exercice1 from './Exercice1';  
import Exercice2 from './Exercice2';
import Exercice3 from './Exercice3';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Exercice1 />  
    <Exercice2 /> 
    <Exercice3 /> 
  </StrictMode>,
)
