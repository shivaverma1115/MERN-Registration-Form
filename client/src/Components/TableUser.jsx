import { Avatar, Box, Pagination, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow } from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'
import { BsArrowUp } from 'react-icons/bs';
import { BsArrowDown } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { fetchdatathroughapi } from '../redux/action';
import { fetchDataAPI } from '../redux/actionType';
import ActionUser from './ActionUser';

const TableUser = () => {

  const tableData = useSelector((state) => state.tableData);

  // ============== sorting ==============
  const [order, setOrder] = useState('ASC');
  // const sortData = (col) => {
  //   if (order === 'ASC') {
  //     const sorted = [...tableData].sort((a, b) =>
  //       a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
  //     )
  //     setTableData(sorted);
  //     setOrder('DEC')
  //   }
  //   if (order === 'DEC') {
  //     const sorted = [...tableData].sort((a, b) =>
  //       a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
  //     )
  //     setTableData(sorted);
  //     setOrder('ASC')
  //   }
  // }

  // ================= Pagination ====================
  const [currentPage, setCurrentPage] = useState(1);
  const userPerPage = 2;
  const lastIdx = currentPage * userPerPage;
  const firstIdx = lastIdx - userPerPage;
  const user = tableData.slice(firstIdx, lastIdx);
  const npage = Math.ceil(tableData.length / userPerPage);

  console.log(tableData);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchdatathroughapi());
  }, [])

  return (
    <Box m={'auto'} >
      <TableContainer>
        <Table>
          <TableHead style={{ backgroundColor: 'tomato', color: 'white' }} >
            <TableRow>
              <TableCell >Profile</TableCell >
              <TableCell
              >Full Name </TableCell >
              <TableCell
              >Email</TableCell >
              <TableCell >Gender</TableCell >
              <TableCell >Status</TableCell >
              <TableCell >Action</TableCell >
            </TableRow>
          </TableHead>
          <TableBody>
            {
              user.map((ele, i) => {
                return <TableRow key={i} style={{ textAlign: 'center' }}>
                  <TableCell >
                    <Avatar sx={{ bgcolor: 'Purple' }}>{i+1}</Avatar>
                  </TableCell >
                  <TableCell >{ele.first_name} {ele.last_name}</TableCell >
                  <TableCell >{ele.email}</TableCell >
                  <TableCell >{ele.gender}</TableCell >
                  <TableCell >{ele.status}</TableCell >
                  <TableCell >
                    <ActionUser ele={ele} />
                  </TableCell >
                </TableRow>
              })
            }
            {/* -------------- */}
          </TableBody>
        </Table>
      </TableContainer>
      <Box width={'fit-content'} m={'auto'} mt={5} >
        <Pagination count={npage} onChange={(e, v) => setCurrentPage(v)} color="primary" defaultPage={1} />
      </Box>
    </Box>
  )
}

export default TableUser
