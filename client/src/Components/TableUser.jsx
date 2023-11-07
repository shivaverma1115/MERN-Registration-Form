import { Box, Table, TableBody, TableCell, TableFooter, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PaginationUser from './PaginationUser'
import ActionUser from './ActionUser'

const TableUser = () => {
  const [tableData, setTableData] = useState([]);
  const fetchData = async () => {
    const res = await fetch(`${process.env.REACT_APP_URL_LINK}/data`);
    const ans = await res.json();
    console.log(ans);
    setTableData(ans);
  }
  useEffect(() => {
    fetchData();
  }, [])

  // ============== sorting ==============
  const [order, setOrder] = useState('ASC');
  const sortData = (col) => {
    if (order === 'ASC') {
      const sorted = [...tableData].sort((a, b) => 
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      )
      setTableData(sorted) ;
      setOrder('DEC')
    }
    if (order === 'DEC') {
      const sorted = [...tableData].sort((a, b) => 
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      )
      setTableData(sorted) ;
      setOrder('ASC')
    }
  }
  return (
    <Box m={'auto'} >
      <Table>
        <TableHead style={{ backgroundColor: 'tomato', color: 'white' }} >
          <TableRow>
            <TableCell>ID</TableCell >
            <TableCell onClick={() => sortData('first_name')} >Full Name</TableCell >
            <TableCell onClick={() => sortData('email')}>Email</TableCell >
            <TableCell >Gender</TableCell >
            <TableCell >Status</TableCell >
            <TableCell >Profile</TableCell >
            <TableCell >Action</TableCell >
          </TableRow>
        </TableHead>
        <TableBody>
          {
            tableData.map((ele, i) => {
              return <TableRow key={i} style={{ textAlign: 'center' }}>
                <TableCell >{i + 1}</TableCell >
                <TableCell >{ele.first_name} {ele.last_name}</TableCell >
                <TableCell >{ele.email}</TableCell >
                <TableCell >{ele.gender}</TableCell >
                <TableCell >{ele.status}</TableCell >
                <TableCell >{ele.profile_img}</TableCell >
                <TableCell >
                  <ActionUser />
                </TableCell >
              </TableRow>
            })
          }
          {/* -------------- */}
        </TableBody>
      </Table>
      <PaginationUser />
    </Box>
  )
}

export default TableUser
