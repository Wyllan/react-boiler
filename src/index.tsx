import React from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { customTheme } from './themes'
import HelloWorld from './components/HelloWorld'
import { GlobalStyle } from './styles'

console.log('Hello from tsx!')

createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={customTheme}>
    <GlobalStyle />
    <HelloWorld />
  </ThemeProvider>
)
