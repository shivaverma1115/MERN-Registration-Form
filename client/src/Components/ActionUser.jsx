import React, { useEffect } from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { FiEye } from 'react-icons/fi';
import { FaRegEdit } from 'react-icons/fa';
import { AiOutlineDelete } from 'react-icons/ai';
import axios from 'axios';
import { deleteUserFromTable } from '../redux/action';
import { useDispatch } from 'react-redux';

const ActionUser = ({ ele }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const dispatch = useDispatch();
    const handleClose = () => {
        setAnchorEl(null);
        console.log(ele._id)
        dispatch(deleteUserFromTable(ele._id));
        alert('You want to delete User?')
    };
    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <BiDotsVerticalRounded />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {/* <MenuItem onClick={handleClose}><FaRegEdit style={{marginRight:'5'}}/>Edit</MenuItem> */}
                <MenuItem onClick={handleClose}><AiOutlineDelete style={{ marginRight: '5' }} />Delete</MenuItem>
            </Menu>
        </div>
    )
}

export default ActionUser
