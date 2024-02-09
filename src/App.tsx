import { useState } from 'react'
import './App.css'
import UserList from './assets/pages/UserList'

function App() {


  return (
    <>
      <div className=" h-screen w-full flex flex-col justify-center items-center">
        <span className=' text-4xl font-extrabold '>User list</span>
        <UserList />
      </div>
    </>
  )
}

export default App
