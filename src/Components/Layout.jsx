import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';
import Fotter from './Fotter.jsx';

const Layout = () => {
  return (
    <>
    <Header />
    <Outlet />
    <Fotter/>
    </>

  )
}

export default Layout