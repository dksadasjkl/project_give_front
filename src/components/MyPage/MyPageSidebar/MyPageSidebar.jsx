import React from 'react'
import { Link } from 'react-router-dom'

function MyPageSidebar({ principal }) {
  return (
   <div>
      <div>
        <div>기본프로필</div>
        <div>닉네임 님</div>
        <div>아이디</div>
      </div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li><Link to="/mypage/account">계정 설정</Link></li>
        <li><Link to="/mypage/donations">기부 내역</Link></li>
        <li><Link to="/mypage/posts">게시글</Link></li>
        <li><Link to="/mypage/comments">댓글</Link></li>
      </ul>
    </div>
  )
}

export default MyPageSidebar