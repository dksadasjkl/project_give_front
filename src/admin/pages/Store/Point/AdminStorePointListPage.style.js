import { css } from "@emotion/react";

export const container = css`
  padding: 30px;
`;

export const title = css`
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: bold;
`;

export const table = css`
  width: 100%;
  border-collapse: collapse;
  background: #fff;

  th, td {
    padding: 12px;
    border-bottom: 1px solid #ddd;
    text-align: center;
  }

  th {
    background: #f5f5f5;
    font-weight: bold;
  }
`;

export const pagination = css`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;

  button {
    padding: 8px 14px;
    cursor: pointer;
  }
`;
