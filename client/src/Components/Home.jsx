import React from 'react'
import { Box } from "@mui/material";
import AddUsers from './AddUsers';
import FilterUser from './FilterUser';
import TableUser from './TableUser';

const Home = () => {
  return (
    <Box>
      <AddUsers/>
      <FilterUser/>
      <TableUser/>
    </Box>
  )
}

export default Home
