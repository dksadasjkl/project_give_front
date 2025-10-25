/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React from 'react'
import MyPageSidebar from '../../components/MyPage/MyPageSidebar/MyPageSidebar'
import MyDonationList from '../../components/MyPage/MyDonationList/MyDonationList'
import { Navigate, Route, Routes } from 'react-router-dom';
import MyCommentsList from '../../components/MyPage/MyCommentsList/MyCommentsList';
import MyProfile from "../../components/MyPage/MyProfile/MyProfile";
import MyFundingList from "../../components/MyPage/MyFundingList/MyFundingList";

function MyPage({ principal }) {
  return (
    <div css={s.layout}>
        <div css={s.sidebar}>
            <MyPageSidebar principal={principal}/>
        </div>
        <div css={s.content}>
            <Routes>
                <Route path="/" element={<Navigate to="account" replace />} />
                
                 {/* 계정 설정: 회원 정보 + 비밀번호 변경 */}
                <Route path="/account" element={<MyProfile principal={principal}/>} />

                {/* 기부 내역 */}
                <Route path="/donations" element={<MyDonationList />} />  

                {/* 기부 내역 */}
                <Route path="/fundings" element={<MyFundingList />} />  

                {/* 게시글/활동 */}
                <Route path="comments" element={<MyCommentsList />} />
            </Routes>
        </div>
    </div>
  )
}

export default MyPage;