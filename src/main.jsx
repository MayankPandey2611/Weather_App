
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { WeatherProvider } from './context/weather.jsx'
createRoot(document.getElementById('root')).render(
  <WeatherProvider>
    <App />

  </WeatherProvider>
  
)
