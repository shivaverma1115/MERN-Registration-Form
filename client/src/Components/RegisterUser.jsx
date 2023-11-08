import { Avatar, Box, Button, FormControl, FormLabel, MenuItem, Radio, RadioGroup, Select } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterUser = () => {
  const nevigate = useNavigate();
  const handleGoToHome = () => {
    nevigate('/')
  }
  const [data, setData] = useState([]);
  const [Img, setImg] = useState('');
  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    // ----------- Img upload --------------
    const formData = new FormData();
    formData.append('Image', Img)
    axios.post(`${process.env.REACT_APP_URL_LINK}/upload`, formData)
      .then((res) => {
        setData({ ...data, 'profile_img': res.data.data[0].url })
        console.log(res);
      })

    // ----------------------------------------------------------- 

    const res = await fetch(`${process.env.REACT_APP_URL_LINK}/data`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    const ans = await res.json();
    console.log(data);
    console.log(ans);
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
          {/* <Avatar alt={ele.first_name} src={ele.profile_img} /> */}
        </Box>
      </Box>
      <Box width={'70%'} m={'auto'} >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField type='text' required id="firstName" name="first_name" label="First name" fullWidth autoComplete="given-name" variant="standard" onChange={(e) => handleInput(e)} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField type='text' required id="LastName" name="last_name" label="Last name" fullWidth autoComplete="given-name" variant="standard" onChange={(e) => handleInput(e)} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField type='email' required id="Email address" name="email" label="Email address" fullWidth autoComplete="given-name" variant="standard" onChange={(e) => handleInput(e)} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField type='number' required id="Mobile" name="mobile_no" label="mobile_no" fullWidth autoComplete="given-name" variant="standard" onChange={(e) => handleInput(e)} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField type='text' required id="Enter Your Location" name="location" label="Enter Your Location" fullWidth autoComplete="given-name" variant="standard" onChange={(e) => handleInput(e)} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <label>Select Your Profile</label>
            <TextField type='file' required id="Select Your Profile" name="profile_img" fullWidth autoComplete="given-name" variant="standard" onChange={(e) => setImg(e.target.files[0])} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl onChange={(e) => handleInput(e)} >
              <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="male" name='gender' control={<Radio />} label="Male" />
                <FormControlLabel value="female" name='gender' control={<Radio />} label="Female" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl onChange={(e) => handleInput(e)} >
              <FormLabel id="demo-row-radio-buttons-group-label">Status</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="active" name='status' control={<Radio />} label="Active" />
                <FormControlLabel value="inactive" name='status' control={<Radio />} label="Inactive" />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
        <Button style={{ marginTop: '20px' }} fullWidth variant="contained" onClick={handleSubmit} >
          Contained
        </Button>
      </Box>
    </Box>
  )
}

export default RegisterUser
