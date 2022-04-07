import styled, { createGlobalStyle, css } from 'styled-components'

const img = document.createElement('img')
img.src = new URL('./assets/fire.webp', import.meta.url).toString()

// styling applied as a global default
export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`

// theme is now fully typed
export const BaseDiv = styled.div`
  background-color: ${(props) => props.theme.colors.tertiary};
`
export const FireDiv = styled.div`
  height: 128px;
  background-image: url(${img.src});
  position: relative;
`
export const MainHeading = styled.h1`
  color: hotpink;
  font-family: 'Comic Sans MS', 'Comic Sans', cursive;
`

// and this theme is fully typed as well
export const cssHelper = css`
  border: 1px solid ${(props) => props.theme.borderRadius};
`
