import * as React from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';

export default function BoxComponent({props}) {
  return (
    <Box  sx={{ textAlign:'center' }}>
    <h4>{props}</h4>
    </Box>
  );
}