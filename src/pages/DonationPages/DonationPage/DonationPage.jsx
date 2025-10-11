import React from 'react'
import DonationList from '../DonationList/DonationList'
import DonationDetail from '../DonationDetail/DonationDetail'
import { Route, Routes } from 'react-router-dom'

function DonationPage({ principal }) {
  return (
    <>
      <Routes>
        <Route path="/" element={ <DonationList /> } />
        <Route path=":donationProjectId" element={<DonationDetail  principal={principal}/>} />
      </Routes>
    </>
  )
}

export default DonationPage