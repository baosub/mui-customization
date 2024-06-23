import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

const Home = () => {
  return (
    <>
      <Container sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography sx={{ fontWeight: 1000 }} variant='h2'>This is Home </Typography>
      </Container>
    </>
  )
}

export default Home
