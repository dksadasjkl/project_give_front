import React from 'react'
import FundingPage from '../../pages/FundingPages/FundingPage/FundingPage'
import { Route, Routes } from 'react-router-dom'

function FundingRoute({ principal }) {
  return (
    <div>
        <Routes>
            <Route path='/funding/*' element={<FundingPage principal={principal}/>}/>
        </Routes>
    </div>
  )
}

export default FundingRoute