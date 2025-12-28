import React from 'react'
import Login from './Login'
import Admin from './Admin'
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"

const App = () => {
  const isLoggedIn=localStorage.getItem("auth");
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path ="/login" element={<Login />} />
        <Route path ="/admin" element={isLoggedIn ? <Admin />:<Navigate to ="login" />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
