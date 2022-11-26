import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function BoxComponent(props) {
  return (
    <Box component="span" sx={{ border: '1px dashed grey' }}>
    <h4>Farm Detials</h4>
    </Box>
  );
}