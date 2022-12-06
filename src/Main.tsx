import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Landing from './components/Landing'
import Project from './components/Project'
import Projects from './components/Projects'
import Title from './components/Title'

const theme = {
  primary: '#816b56',
  primaryTint: '#8D7966',
  // secondary: '#B4A69B',
  dark: '#634832',
  secondary: '#dad0c6',
  bg: '#f3eee9',
}

const Container = styled.div`
  background-color: ${(props) => props.theme.bg};
`

export default function Main() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Title /> */}
      <Landing />
      <Projects></Projects>
    </ThemeProvider>
  )
}
