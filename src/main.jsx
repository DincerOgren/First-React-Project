import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import PortfolioApp from './Examples/Counter/Portfolio/Portfolio.jsx'
//import App from './ProfileCardApp.jsx'
//import App from './CounterApp.jsx'
//import App from './Examples/Counter/StateCounterExample.jsx'
//import App from './Examples/Form/Form.jsx'
//import App from './Examples/Color Picker/ColorPicker.jsx'
//import App from './Examples/MouseTracker/MouseTracker.jsx'
//import App from './Examples/Clock/Clock.jsx'
//import App from './Examples/Custom Hooks/CounterHook/CounterHookApp.jsx'
//import App from './Examples/ApiCall/ApiCall.jsx'
//import App from './Examples/Expanded Forms/Form.jsx'
import App from './Examples/React Hook Form/ReactForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
