import React from 'react'

import Home from './home/Home'
import Courses from './courses/Courses'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'


function App() {
  return (<>

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/course' element={<Courses />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>



    </>
    
  )
}

export default App