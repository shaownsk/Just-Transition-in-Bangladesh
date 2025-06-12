import React from 'react'
import Navbar from '../../component/Heder/Navbar'
import { Outlet } from 'react-router'
import Footer from '../../component/Footer/Footer'

export const Root = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}
