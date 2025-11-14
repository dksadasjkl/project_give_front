import React from 'react'
import DonationList from '../DonationList/DonationList'
import DonationDetail from '../DonationDetail/DonationDetail'
import { Route, Routes } from 'react-router-dom'

function DonationPage({ principal }) {
  return (
    <>
      <Routes>
        
        {/* 기부 리스트 */}
        <Route path="/" element={ <DonationList /> } />
        {/* 기부 상세 */}
        <Route path=":donationProjectId" element={<DonationDetail  principal={principal}/>} />
      </Routes>
    </>
  )
}

export default DonationPage