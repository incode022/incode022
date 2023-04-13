import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../../components'

const index = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default index