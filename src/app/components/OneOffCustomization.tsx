import React from 'react'
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const OneOffCustomization = () => {
    return (
        <Box>
        <Typography variant='h4'>Sx property</Typography>
            <Slider
                defaultValue={30}
                sx={{
                    width: 300,
                    color: 'success.main',
                }}
            />

        </Box>
    )
}

export default OneOffCustomization
