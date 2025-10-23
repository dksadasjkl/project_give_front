/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom"
import * as s from "./style"
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import instance from "../../../apis/utills/instance";
import getServerAddress from "../../../constants/serverAddress";
import logoHome from "../../../assets/logo_home.png";

export const RootHeader = () => {
  const [ isLogin, setLogin ] = useState(false);
  const queryClient = useQueryClient();
  const principalQueryState = queryClient.getQueryState(["principalQuery"]);

  useEffect(() => {
    if (principalQueryState) {
      setLogin(principalQueryState.status === "success");
    } else {
      setLogin(false);
    }
  }, [principalQueryState?.status]);

  

  const handleLogoutClick = () => {
    localStorage.removeItem("AccessToken");
    instance.interceptors.request.use((config) => {
      config.headers.Authorization = null;
      return config;
    });
    queryClient.refetchQueries(["principalQuery"]);
  };

  return (
    <div css={s.headerFull}>
      <div css={s.header}>
        {/* 왼쪽 로고 */}
        <Link css={s.logoBox} to="/">
          <img src={logoHome} alt="기부 로고 홈" css={s.logoimage} />
        </Link>

        {/* 중앙 메뉴 */}
        <div css={s.centerMenu}>
          <Link css={s.link} to="/donation">
            기부
          </Link>
          <Link css={s.link} to="/funding">
            펀딩
          </Link>
          <Link css={s.link} to="/">
            쇼핑
          </Link>
          <Link css={s.link} to="/">
            지도
          </Link>
          {/* <div>검색 아이콘</div> */}
        </div>

        {/* 오른쪽 로그인/로그아웃 + MY */}
        <div css={s.rightBox}>
          {!isLogin ? (
            <a css={s.login} href="/account">
              로그인
            </a>
          ) : (
            <>
              <Link css={s.login} to="/mypage/account">
                MY
              </Link>
                <a css={s.login} onClick={handleLogoutClick} href="/">
                  로그아웃
                </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};