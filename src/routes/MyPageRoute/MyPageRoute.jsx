import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MyPage from '../../pages/MyPage/MyPage'

function MyPageRoute({ principal }) {
  return (
    <div>
        <Routes>
            <Route path='/mypage/*' element={<MyPage principal={principal}/>}/>
        </Routes>
    </div>
  )
}

export default MyPageRoute