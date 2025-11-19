import { css } from "@emotion/react";

export const container = css`
  width: 100%;
`;

export const title = css`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 30px;
`;

export const table = css`
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;

  th, td {
    padding: 12px;
    border-bottom: 1px solid #eee;
    text-align: left;
  }

  th {
    background: #f2f2f2;
    font-weight: bold;
  }
`;

export const deleteBtn = css`
  padding: 6px 12px;
  background: #ff4d4f;
  color: #fff;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #ff7875;
  }
`;

export const pagination = css`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 12px;
`;

export const noData = css`
  text-align: center;
  padding: 30px 0;
  color: #777;
  font-size: 16px;
`;
