import { Box, Button, Input } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addUserToggle } from '../redux/action';
import { useNavigate } from 'react-router-dom';

const AddUsers = () => {
    const nevigate = useNavigate() ;
    const handleGoToRegister = ()=>{
        nevigate('/addUser')
    }
    return (
        <Box display={'flex'} width={'70%'} m={'auto'} p={5} justifyContent={'space-between'}>
            <Box>
                <Input type="text" placeholder="Search" />
                <Button>Search</Button>
            </Box>
            <Box>
                <Button variant="contained" onClick={handleGoToRegister}  >+Add User</Button>
            </Box>
        </Box>
    )
}

export default AddUsers
