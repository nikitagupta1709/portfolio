import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About } from '../Pages/About'
import { Home } from '../Pages/Home'
import { Portfolio } from '../Pages/Portfolio'
import { Contact } from '../Pages/Contact'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}>Home</Route>
        <Route path="/about" element={<About />}>About</Route>
        <Route path="/portfolio" element={<Portfolio />}>Portfolio</Route>
        <Route path="/contact" element={<Contact />}>Contact</Route>
    </Routes>

  )
}
