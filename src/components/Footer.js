import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <div style={{display:'flex'}}>
      <img src={Logo} alt="logo" style={{ width: '50px', height: '50px' }} />
        <h1 style={{color:'#b30c0c', paddingTop:'15px', paddingLeft:'15px'}}>Get Fit </h1>
      </div>
      
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">“Your body can stand almost anything. It’s your mind that you have to convince.”</Typography>
  </Box>
);

export default Footer;
