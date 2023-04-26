import React from 'react'
import 'leaflet/dist/leaflet.css'
import { createRoot } from 'react-dom/client'
import App from './App'

// @ts-ignore: root element is there
createRoot(document.getElementById('root')).render(<App />)
