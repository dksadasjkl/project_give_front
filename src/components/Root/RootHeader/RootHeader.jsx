/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom"
import * as s from "./style"
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import instance from "../../../apis/utills/instance";
import getServerAddress from "../../../constants/serverAddress";

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
    <div css={s.layout}>
        <div css={s.header}>
            <Link css={s.link} to="/">기부 로고 홈</Link>
            <Link css={s.link} to="/donation">기부</Link>
            <Link css={s.link} to="/">펀딩</Link>
            <Link css={s.link} to="/">쇼핑</Link>
            <Link css={s.link} to="/">지도</Link>
            <div>검색 아이콘</div>
            <div css={s.loginBox}>
                        { !isLogin ?
                        <div css={s.accountItems}>
                            <a css={s.login} href={`/account`}>
                                로그인
                            </a>
                        </div>
                        :   
                        <>
                            <div css={s.accountItems}>
                                <a css={s.login} onClick={handleLogoutClick} href={`/`}>
                                   로그아웃
                                </a>
                            </div>          
                        </> 
                        }   
                    </div>
        </div>
    </div>
  )
}
