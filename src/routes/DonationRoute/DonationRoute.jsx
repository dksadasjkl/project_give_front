import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DonationPage from '../../pages/DonationPages/DonationPage/DonationPage'

function  DonationRoute( { principal } ) {
   console.log("DonationRoute principal:", principal);
  return (
    <>
        <Routes>
            <Route path='/donation/*' element={<DonationPage principal={principal}/>} />
        </Routes>
    </>
  )
}

export default DonationRoute