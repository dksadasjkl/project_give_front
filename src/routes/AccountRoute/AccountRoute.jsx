import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthenticationPage from '../../pages/AccountPage/AuthenticationPage/AuthenticationPage'

function AccountRoute() {
  return (
    <div>
        <Routes>
            <Route path='/account/*' element={<AuthenticationPage />}/>
        </Routes>
    </div>
  )
}

export default AccountRoute