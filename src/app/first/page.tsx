'use client'
import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Button } from '@mui/material';


const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

const page = () => {
  return (
    <ThemeProvider theme={darkTheme}>
        <Button>Dark</Button>
    
    <main>This app is using the dark mode</main>
  </ThemeProvider>
  )
}

export default page
