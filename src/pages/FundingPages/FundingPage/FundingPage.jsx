import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FundingDetail from '../FundingDetail/FundingDetail'
import FundingList from '../FundingList/FundingList'

function FundingPage({ principal }) {
  return (
    <Routes>
        <Route path="/" element={<FundingList />} />
        <Route path=":donationProjectId" element={<FundingDetail principal={principal} />} />
    </Routes>
  )
}

export default FundingPage