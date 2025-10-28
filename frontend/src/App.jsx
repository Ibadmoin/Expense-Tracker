import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,

} from "react-router-dom"

import Login from "./pages/auth/Login"
import Signup from "./pages/auth/Signup"
import Home from "./pages/dashboard/Home"

import Expense from "./pages/dashboard/Expense"
import Income from "./pages/dashboard/Income"


const Root = () => {
  const isAuthenticated = !localStorage.getItem("token");


  return isAuthenticated?(
    <Navigate to="/dashboard" />
  ):(
    <Navigate to="/login" />

  );
};

function App() {
  return (
    <div className=''>
      <Router >
          <Routes >
            <Route path='/' element={<Root />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/dashboard' element={<Home />} />
            <Route path='/income' element={<Income />} />
            <Route path='/expense' element={<Expense />} />
          </Routes>
      </Router>
          
      
    </div>
  )
}

export default App




