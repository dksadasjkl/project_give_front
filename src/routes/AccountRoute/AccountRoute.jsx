import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthenticationPage from '../../pages/AccountPage/AuthenticationPage/AuthenticationPage'
import OAuthSignupPage from '../../pages/AccountPage/OAuthSignupPage/OAuthSignupPage'
import OAuthSigninPage from '../../pages/AccountPage/OAuthSigninPage/OAuthSigninPage'

function AccountRoute() {
  return (
    <div>
        <Routes>
            <Route path='/account/*' element={<AuthenticationPage />}/>
            <Route path='/account/oauth2/sign-up' element={<OAuthSignupPage />}/>
            <Route path='/account/oauth2/sign-in' element={<OAuthSigninPage />}/>
        </Routes>
    </div>
  )
}

export default AccountRoute