import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MyPage from '../../pages/MyPage/MyPage'

function MyPageRoute() {
  return (
    <div>
        <Routes>
            <Route path='/mypage' element={<MyPage />}/>
        </Routes>
    </div>
  )
}

export default MyPageRoute