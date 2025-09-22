import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DonationPage from '../../pages/DonationPages/DonationPage/DonationPage'

const DonationRoute = () => {
  return (
    <>
        <Routes>
            <Route path='/donation/*' element={<DonationPage />} />
        </Routes>
    </>
  )
}

export default DonationRoute