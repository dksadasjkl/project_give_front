import { css } from "@emotion/react";

export const sidebar = css`
  width: 220px;
  padding: 20px;
  border: 1px solid #e3e8ec;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 2px 6px rgba(0,0,0,0.04);
`;

export const menuList = css`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const menuLink = css`
  display: block;
  padding: 12px 14px;
  margin-bottom: 8px;
  color: #222;
  font-weight: 500;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    background-color: #03a94d;
    color: #fff;
  }
`;

export const activeLink = css`
  background-color: #03a94d;
  color: #fff;
  font-weight: 600;
`;
