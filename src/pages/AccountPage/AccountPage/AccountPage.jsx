import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthenticationPage from '../AuthenticationPage/AuthenticationPage'
import OAuthSignupPage from '../OAuthSignupPage/OAuthSignupPage'
import OAuthSigninPage from '../OAuthSigninPage/OAuthSigninPage'

function AccountPage() {
  return (
    <>
        <Routes>
            <Route path="/" element={ <AuthenticationPage /> } />
            <Route path='/oauth2/sign-up' element={<OAuthSignupPage />}/>
            <Route path='/oauth2/sign-in' element={<OAuthSigninPage />}/>
        </Routes>
    </>
  )
}

export default AccountPage