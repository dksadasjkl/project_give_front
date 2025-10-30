import React from 'react'
import { Route, Routes } from 'react-router-dom'
import StoreList from '../StoreList/StoreList'
import StoreDetail from '../StoreDetail/StoreDetail'
import StorePaymentPage from '../StorePaymentPage/StorePaymentPage'

function StorePage({ principal }) {
  return (
    <Routes>
      <Route path="/" element={<StoreList />} />
      <Route path=":productId" element={<StoreDetail principal={principal} />} />
      <Route path="/payment" element={<StorePaymentPage principal={principal}/>} />
    </Routes>
  )
}

export default StorePage