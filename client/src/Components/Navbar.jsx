import React from 'react'
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

const Navbar = () => {
  return (
    <Box bgcolor={'black'}p={2}>
      <Box display={'flex'} width={'70%'}color={'white'}m={'auto'}>
        <Box mx={3}>Navbar</Box>
        <Box>Home</Box>
      </Box>
    </Box>
  )
}

export default Navbar
