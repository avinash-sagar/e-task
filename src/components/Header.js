

import React from 'react'
import {Badge, Box} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = ({cart}) => {
  return (
    <Box  sx={{
        width:'100%',
        height:'70px'
        , 
        background: 'linear-gradient(#3B3B3B, #979797)',
        display:'flex',
        justifyContent:'space-between',
        position:'fixed',
        overflow:'hidden',
        top:'0%',
        zIndex:'2'
    }}  >
        <Box
        component={'img'}
        src="Img/logo1.png"
        sx={{
            width:'70px',
            height:'60px',
            position:'relative',
            left:'2%',
            cursor:'pointer'
        }}
        />

       <Box  sx={{
           // border:'1px solid red',
           position:'relative',
           right:'4%'
           
        }} >
           <Badge  badgeContent={cart} color='primary'
           sx={{
            color:'#3cb371',
            position:'relative',
            top:'50%',
            transform:'translatey(-50%)',
            cursor:'pointer'
            
        }} >
            <ShoppingCartIcon sx={{fontSize:'50px'}}  />
       </Badge>
        </Box>



    </Box>
  )
}

export default Header
