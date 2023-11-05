import { Avatar, Box, Button, FormControl, FormLabel, MenuItem, Radio, RadioGroup, Select } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useNavigate } from 'react-router-dom';

const RegisterUser = () => {
  const nevigate = useNavigate() ;
  const handleGoToHome = ()=>{
    nevigate('/')
  }
  return (
    <Box>
      <Button onClick={handleGoToHome} style={{ margin: '20px' }} variant="contained">
        Back to Home
        </Button>
      <Box width={'fit-content'} m={'auto'} >
        <Typography variant="h6" gutterBottom>
          Register Your Details
        </Typography>
        <Box width={'fit-content'} m={'auto'} >
          <Avatar sx={{ bgcolor: deepPurple[500] }}>SV</Avatar>
        </Box>
      </Box>
      <Box width={'70%'} m={'auto'} >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField type='text' required id="firstName" name="firstName" label="First name" fullWidth autoComplete="given-name" variant="standard" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField type='text' required id="LastName" name="LastName" label="Last name" fullWidth autoComplete="given-name" variant="standard" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField type='email' required id="Email address" name="Email address" label="Email address" fullWidth autoComplete="given-name" variant="standard" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField type='number' required id="Mobile" name="Mobile" label="Mobile" fullWidth autoComplete="given-name" variant="standard" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField type='text' required id="Enter Your Location" name="Enter Your Location" label="Enter Your Location" fullWidth autoComplete="given-name" variant="standard" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <label>Select Your Profile</label>
            <TextField type='file' required id="Select Your Profile" name="Select Your Profile" fullWidth autoComplete="given-name" variant="standard" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <label>Select Your Status</label>
            <Select required id="Select Your Status" name="Select Your Status" fullWidth autoComplete="given-name">
              <MenuItem>Active</MenuItem>
              <MenuItem>InActive</MenuItem>
            </Select>
          </Grid>
        </Grid>
        <Button style={{ marginTop: '20px' }} fullWidth variant="contained">Contained</Button>
      </Box>
    </Box>
  )
}

export default RegisterUser
