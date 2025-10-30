/** @jsxImportSource @emotion/react */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as s from './style';

function MyPageSidebar({ principal }) {
  const location = useLocation();

  return (
    <div css={s.sidebar}>
      <ul css={s.menuList}>
        <li>
          <Link to="/mypage/account" css={[s.menuLink, location.pathname === '/mypage/account' && s.activeLink]}>
            계정 관리
          </Link>
        </li>
        <li>
          <Link to="/mypage/donations" css={[s.menuLink, location.pathname === '/mypage/donations' && s.activeLink]}>
            기부 내역
          </Link>
        </li>
        <li>
          <Link to="/mypage/fundings" css={[s.menuLink, location.pathname === '/mypage/fundings' && s.activeLink]}>
            편딩 내역
          </Link>
        </li>
        <li>
          <Link to="/mypage/comments" css={[s.menuLink, location.pathname === '/mypage/comments' && s.activeLink]}>
            댓글
          </Link>
        </li>

        <li>
           <Link
            to="/mypage/store/cart"
            css={[s.menuLink, location.pathname === "/mypage/store/cart" && s.activeLink]}
          >
            장바구니
          </Link>
        </li>
        <li>
           <Link
            to="/mypage/store/wishlist"
            css={[s.menuLink, location.pathname === "/mypage/store/wishlist" && s.activeLink]}
          >
            찜 목록
          </Link>
        </li>
        <li>
          <Link
            to="/mypage/store/orders"
            css={[s.menuLink, location.pathname === "/mypage/store/orders" && s.activeLink]}
          >
            주문 내역
          </Link>
        </li>
        <li>
          <Link
            to="/mypage/store/points"
            css={[s.menuLink, location.pathname === "/mypage/store/points" && s.activeLink]}
          >
            포인트 내역
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MyPageSidebar;