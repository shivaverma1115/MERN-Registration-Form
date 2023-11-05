import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import RegisterUser from '../Components/RegisterUser'

const AllRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/addUser' element={<RegisterUser/>} />
    </Routes>
  )
}

export default AllRouter
