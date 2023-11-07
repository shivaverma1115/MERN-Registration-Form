import { Box, Pagination, Table, TableBody, TableCell, TableFooter, TableHead, TableRow } from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'
import { BsArrowUp } from 'react-icons/bs';
import { BsArrowDown } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { fetchdatathroughapi } from '../redux/action';
import { fetchDataAPI } from '../redux/actionType';
import ActionUser from './ActionUser';

const TableUser = () => {

  const data = useSelector((state) => state.tableData);
  console.log(data);
  const [tableData, setTableData] = useState(data);
  
  // ============== sorting ==============
  const [order, setOrder] = useState('ASC');
  const sortData = (col) => {
    if (order === 'ASC') {
      const sorted = [...tableData].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      )
      setTableData(sorted);
      setOrder('DEC')
    }
    if (order === 'DEC') {
      const sorted = [...tableData].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      )
      setTableData(sorted);
      setOrder('ASC')
    }
  }

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
      <Table>
        <TableHead style={{ backgroundColor: 'tomato', color: 'white' }} >
          <TableRow>
            <TableCell>ID</TableCell >
            <TableCell onClick={() => sortData('first_name')} >Full Name {order === 'ASC' ? <BsArrowUp /> : <BsArrowDown />} </TableCell >
            <TableCell onClick={() => sortData('email')}>Email {order === 'ASC' ? <BsArrowUp /> : <BsArrowDown />}</TableCell >
            <TableCell >Gender</TableCell >
            <TableCell >Status</TableCell >
            <TableCell >Profile</TableCell >
            <TableCell >Action</TableCell >
          </TableRow>
        </TableHead>
        <TableBody>
          {
            user.map((ele, i) => {
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
      <Pagination count={npage} onChange={(e, v) => setCurrentPage(v)} color="primary" defaultPage={1} />
    </Box>
  )
}

export default TableUser
