import { css } from "@emotion/react";

export const container = css`
  padding: 20px;
`;

export const title = css`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 25px;
`;

export const card = css`
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.07);
  width: 600px;
`;

export const row = css`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid #eee;

  &:last-of-type {
    border-bottom: none;
  }
`;

export const label = css`
  font-weight: 600;
  color: #333;
`;

export const value = css`
  font-weight: 400;
  color: #555;
`;

export const roleTag = css`
  background: #4a90e2;
  color: white;
  padding: 3px 8px;
  border-radius: 6px;
  font-size: 13px;
  margin-right: 5px;
`;

export const buttonWrap = css`
  margin-top: 25px;
  display: flex;
  gap: 12px;
`;

export const deleteBtn = css`
  background: #e74c3c;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background: #c0392b;
  }
`;

export const backBtn = css`
  background: #95a5a6;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background: #7f8c8d;
  }
`;
