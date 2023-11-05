import { Box, Button, FormControl, FormControlLabel, FormLabel, Input, Radio, RadioGroup } from '@mui/material'
import { Select } from '@mui/base/Select';
import { Option } from '@mui/base/Option';
import React from 'react'
import { Dropdown } from '@mui/base/Dropdown';
import { MenuButton } from '@mui/base/MenuButton';
import { Menu } from '@mui/base/Menu';
import { MenuItem } from '@mui/base/MenuItem';

const FilterUser = () => {
    return (
        <Box p={5} display={'flex'} justifyContent={'space-around'} >
            <Button variant="contained" color="success">Export to Csv</Button>
            <Box>
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">Filter By Gender</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="other" control={<Radio />} label="All" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                    </RadioGroup>
                </FormControl>
            </Box>
            <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Short By Value</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="other" control={<Radio />} label="New" />
                    <FormControlLabel value="male" control={<Radio />} label="Old" />
                </RadioGroup>
            </FormControl>
            <Box>
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">Filter By Status</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="other" control={<Radio />} label="All" />
                        <FormControlLabel value="male" control={<Radio />} label="Active" />
                        <FormControlLabel value="female" control={<Radio />} label="InActive" />
                    </RadioGroup>
                </FormControl>
            </Box>
        </Box>
    )
}

export default FilterUser
