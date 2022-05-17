
import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box sx={{
        width:'100%',
        height:'60px',
        background: 'linear-gradient(#3B3B3B, #979797)',
    }} >
            <Typography variant='h5'
            sx={{
                textAlign:'center',
                color:'white'
            }} >
                Footer
            </Typography>


    </Box>
  )
}

export default Footer
