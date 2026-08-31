import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TranspositionCalculator from './TranspositionCalculator.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TranspositionCalculator />
  </StrictMode>,
)
