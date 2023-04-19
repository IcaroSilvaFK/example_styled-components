import React from 'react'
import {createRoot} from 'react-dom/client'
import {ThemeProvider} from 'styled-components'
import { App } from './App'
import { CounterContextProvider } from './context/CounterContextProvider'
import { theme } from './styles/theme'


createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>

    <CounterContextProvider>
      <App />
    </CounterContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
