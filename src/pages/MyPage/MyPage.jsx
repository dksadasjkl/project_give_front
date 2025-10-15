import React from 'react'
import MyPageSidebar from '../../components/MyPage/MyPageSidebar/MyPageSidebar'
import MyDonationList from '../../components/MyPage/MyDonationList/MyDonationList'
import MyProfile from '../../components/MyPage/MyProfile/MyProfile';
import MySettings from '../../components/MyPage/MySettings/MySettings';
import { Navigate, Route, Routes } from 'react-router-dom';

function MyPage() {
  return (
    <div>
        <div>

            <MyPageSidebar />
        </div>
        <div>
            <Routes>
                <Route path="/" element={<Navigate to="profile" replace />} />
                <Route path="/profile" element={<MyProfile />} />
                <Route path="/settings" element={<MySettings />} />
                <Route path="/donations" element={<MyDonationList />} />
            </Routes>
        </div>
    </div>
  )
}

export default MyPage;