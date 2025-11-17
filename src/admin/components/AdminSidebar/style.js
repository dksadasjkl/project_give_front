import { css } from "@emotion/react";

export const sidebar = css`
  width: 240px;
  height: 100vh;
  background: #1f2533;
  padding: 28px 0;
  color: #fff;
  position: fixed;
  left: 0;
  top: 0;
  overflow-y: auto;
`;

export const logo = css`
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
  letter-spacing: -0.5px;
`;

export const menuList = css`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const menuItem = css`
  display: block;
  padding: 14px 23px;
  color: #c7c7c7;
  text-decoration: none;
  font-size: 15px;
  border-left: 3px solid transparent;
  transition: 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.07);
    color: #fff;
  }
`;

export const activeMenu = css`
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-weight: 600;
  border-left: 3px solid #4f46e5;
`;
