import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MyPage from '../../pages/MyPage/MyPage'
import PrivateRoute from '../PrivateRoute/PrivateRoute'

function MyPageRoute({ principal }) {
  return (
    <div>
       <Routes>
          <Route
            path='/mypage/*'
            element={
              <PrivateRoute principal={principal}>
                <MyPage principal={principal}/>
              </PrivateRoute>
            }
          />
      </Routes>
    </div>
  )
}

export default MyPageRoute