import React from 'react'
import { Route, Routes } from 'react-router-dom'
import StorePage from '../../pages/StorePages/StorePage/StorePage'

function StoreRoute({ principal }) {
  return (
    <Routes>
      <Route path="/store/*" element={<StorePage principal={principal} />} />
    </Routes>
  )
}

export default StoreRoute