import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/homepage'
import { Signin } from '../pages/signin'
import { Register } from '../pages/register'

export const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/signin" element={<Signin />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  )
}
