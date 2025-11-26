import React from 'react'
import { Route, Routes } from 'react-router-dom'
import StoreList from '../StoreList/StoreList'
import StoreDetail from '../StoreDetail/StoreDetail'
import StorePaymentPage from '../StorePaymentPage/StorePaymentPage'
import StoreCartPage from '../StoreCartPage/StoreCartPage'
import StoreWishlistPage from '../StoreWishlistPage/StoreWishlistPage'
import StoreOrderPage from '../StoreOrderPage/StoreOrderPage'
import StorePointPage from '../StorePointPage/StorePointPage'
import PrivateRoute from '../../../routes/PrivateRoute/PrivateRoute'

function StorePage({ principal }) {
  return (
    <Routes>
      {/* 공개 */}
      <Route path="/" element={<StoreList />} />
      <Route path=":productId" element={<StoreDetail principal={principal} />} />

      {/* 로그인 필요 */}
      <Route
        path="/payment"
        element={
          <PrivateRoute principal={principal}>
            <StorePaymentPage principal={principal} />
          </PrivateRoute>
        }
      />

      <Route
        path="/cart"
        element={
          <PrivateRoute principal={principal}>
            <StoreCartPage principal={principal} />
          </PrivateRoute>
        }
      />

      <Route
        path="/wishlist"
        element={
          <PrivateRoute principal={principal}>
            <StoreWishlistPage principal={principal} />
          </PrivateRoute>
        }
      />

      <Route
        path="/orders"
        element={
          <PrivateRoute principal={principal}>
            <StoreOrderPage principal={principal} />
          </PrivateRoute>
        }
      />

      <Route
        path="/points"
        element={
          <PrivateRoute principal={principal}>
            <StorePointPage principal={principal} />
          </PrivateRoute>
        }
      />
    </Routes>
  )
}

export default StorePage
