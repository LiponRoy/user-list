import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"
import UserList from './assets/pages/UserList'
import SingleUser from './assets/pages/SingleUser'
import Navbar from './assets/components/Navbar'

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="singleUser/:id" element={<SingleUser />} />
        {/* <Route path="contact" element={<Contact />} /> */}
      </Routes>
    </>
  )
}

export default App
