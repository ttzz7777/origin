import React, { Component } from 'react'
import { Outlet } from 'react-router'

const Home = () => {
  return (
    <div>
      this is home
      <Outlet />
    </div>
  )
}
export default Home
