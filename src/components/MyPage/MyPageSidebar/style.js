import { css } from '@emotion/react';

export const sidebar = css`
  width: 220px;
  height: 800px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  background-color: transparent;

`;

export const menuList = css`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const menuLink = css`
  display: block;
  padding: 10px 14px;
  margin-bottom: 6px;
  color: #333;
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
`;