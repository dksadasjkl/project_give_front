import React from 'react'
import { Route, Routes } from 'react-router-dom'
import StoreList from '../StoreList/StoreList'
import StoreDetail from '../StoreDetail/StoreDetail'
import StorePaymentPage from '../StorePaymentPage/StorePaymentPage'
import StoreCartPage from '../StoreCartPage/StoreCartPage'
import StoreWishlistPage from '../StoreWishlistPage/StoreWishlistPage'
import StoreOrderPage from '../StoreOrderPage/StoreOrderPage'
import StorePointPage from '../StorePointPage/StorePointPage'

function StorePage({ principal }) {
  return (
    <Routes>
      <Route path="/" element={<StoreList />} />
      <Route path=":productId" element={<StoreDetail principal={principal} />} />
      <Route path="/payment" element={<StorePaymentPage principal={principal}/>} />
      <Route path="/cart" element={<StoreCartPage principal={principal} />} />
      <Route path="/wishlist" element={<StoreWishlistPage principal={principal} />} />
      <Route path="/orders" element={<StoreOrderPage principal={principal} />} />
      <Route path="/points" element={<StorePointPage principal={principal} />} />
    </Routes>
  )
}

export default StorePage