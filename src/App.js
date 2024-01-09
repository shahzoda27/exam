import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Users from './component/Users'
export default function App() {
  return (
    <Routes>
    <Route path="/" element={<Users/>} />
    </Routes>
  )
}