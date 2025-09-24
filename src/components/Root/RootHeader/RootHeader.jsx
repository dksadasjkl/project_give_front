/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom"
import * as s from "./style"

export const RootHeader = () => {
  return (
    <div css={s.layout}>
        <div css={s.header}>
            <Link css={s.link} to="/">기부 로고 홈</Link>
            <Link css={s.link} to="/donation">기부</Link>
            <Link css={s.link} to="/">펀딩</Link>
            <Link css={s.link} to="/">쇼핑</Link>
            <Link css={s.link} to="/">지도</Link>
            <div>검색 아이콘</div>
            <Link css={s.link} to="/account">로그인</Link>
        </div>
    </div>
  )
}
