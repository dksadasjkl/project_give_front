import { css } from "@emotion/react";

export const sidebar = css`
  width: 220px;
  height: 100vh;
  background: #1f2533;
  padding: 20px 0;
  color: #fff;
  position: fixed;
  left: 0;
  top: 0;
`;

export const logo = css`
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
`;

export const menuList = css`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const menuItem = css`
  display: block;
  padding: 14px 20px;
  color: #d0d0d0;
  text-decoration: none;
  font-size: 15px;
  transition: 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
  }
`;

export const activeMenu = css`
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
  font-weight: 600;
`;
