/** @jsxImportSource @emotion/react */
import { Link, useLocation } from "react-router-dom";
import * as s from "./style";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import instance from "../../../apis/utills/instance";
import logoHome from "../../../assets/logo_home.png";
import { TbLogin, TbLogout } from "react-icons/tb";
import { FiShoppingCart } from "react-icons/fi";
import getServerAddress from "../../../constants/serverAddress";

export const RootHeader = () => {
  const [isLogin, setLogin] = useState(false);
  const queryClient = useQueryClient();
  const principalQueryState = queryClient.getQueryState(["principalQuery"]);
  const location = useLocation();

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
          <Link
            css={[
              s.link,
              location.pathname.startsWith("/donation") && s.activeDonation,
            ]}
            to="/donation"
          >
            기부
          </Link>

          <Link
            css={[
              s.link,
              location.pathname.startsWith("/funding") && s.activeFunding,
            ]}
            to="/funding"
          >
            펀딩
          </Link>

          <Link
            css={[
              s.link,
              location.pathname.startsWith("/store") && s.activeStore,
            ]}
            to="/store"
          >
            공감가게
          </Link>

          <Link
            css={[
              s.link,
              location.pathname.startsWith("/map") && s.activeMap,
            ]}
            to="/map"
          >
            내 주변 기부
          </Link>
        </div>

        {/* 오른쪽 영역 */}
        <div css={s.rightBox}>
          {!isLogin ? (
            <div css={s.accountItems}>
              {/* 로그인 전 → 로그인 아이콘만 */}
              <a
                css={s.login}
                href={`/account`}
                title="로그인"
              >
                <TbLogin size={22} />
              </a>
            </div>
          ) : (
            <div css={s.accountItems}>
              {/* 로그인 후 → 로그아웃, 장바구니, MY */}
              <a
                css={s.login}
                onClick={handleLogoutClick}
                href={`/`}
                title="로그아웃"
              >
                <TbLogout size={22} />
              </a>

              <Link css={s.login} to="/store/cart" title="장바구니">
                <FiShoppingCart size={22} />
              </Link>

              <Link css={s.login} to="/mypage/account" title="MY 페이지">
                MY
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
