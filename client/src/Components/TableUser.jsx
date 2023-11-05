import { Box, Table, TableBody, TableCell, TableFooter, TableHead, TableRow } from '@mui/material'
import React from 'react'
import PaginationUser from './PaginationUser'
import ActionUser from './ActionUser'

const TableUser = () => {
  return (
    <Box m={'auto'} >
      <Table>
        <TableHead style={{ backgroundColor: 'tomato', color: 'white' }} >
          <TableRow>
            <TableCell>ID</TableCell >
            <TableCell>Full Name</TableCell >
            <TableCell>Email</TableCell >
            <TableCell>Gender</TableCell >
            <TableCell>Status</TableCell >
            <TableCell>Profile</TableCell >
            <TableCell>Action</TableCell >
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow style={{ textAlign: 'center' }}>
            <TableCell >1</TableCell >
            <TableCell >Shiva Verma</TableCell >
            <TableCell >shivaverma091@gmail.com</TableCell >
            <TableCell >Mail</TableCell >
            <TableCell >Active</TableCell >
            <TableCell >Img/src</TableCell >
            <TableCell >
              <ActionUser/>
            </TableCell >
          </TableRow>
          {/* -------------- */}
        </TableBody>
      </Table>
          <PaginationUser />
    </Box>
  )
}

export default TableUser
