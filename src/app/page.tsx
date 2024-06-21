import React from 'react'
import Container from '@mui/material/Container'
import OneOffCustomization from './components/OneOffCustomization'
import Typography from '@mui/material/Typography'

const Home = () => {
  return (
    <>
      <Container sx={{display: 'flex', flexDirection: 'column'}}>
      <Typography sx={{fontWeight: 1000}} variant='h1'>This is Home </Typography>  
        <OneOffCustomization />
      </Container>
    </>
  )
}

export default Home
