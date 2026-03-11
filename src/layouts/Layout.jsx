import React from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { Outlet } from 'react-router-dom'
import Testimonials from '../components/Testimonials.jsx'

export default function Layout() {
  return (
    <>
    <div className=" min-h-screen">

      <Header />
      <Outlet />
      <Testimonials />
      <Footer />
    </  div>
    </>
  )
}