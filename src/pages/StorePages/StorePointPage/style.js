/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const container = css`
  max-width: 800px;
  margin: 40px auto;
  font-family: "Pretendard";
`;

export const title = css`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const loading = css`
  text-align: center;
  padding: 50px;
`;

export const empty = css`
  text-align: center;
  color: #777;
  padding: 40px;
`;

export const tableWrapper = css`
  overflow-x: auto;
  border-radius: 10px;
  border: 1px solid #ddd;
  background: #fff;
`;

export const table = css`
  width: 100%;
  border-collapse: collapse;
  text-align: center;

  th, td {
    padding: 14px 10px;
    border-bottom: 1px solid #eee;
  }

  th {
    background: #f8f8f8;
    font-weight: 600;
  }
`;

export const plus = css`
  color: #0078ff;
  font-weight: 600;
`;

export const minus = css`
  color: #e74c3c;
  font-weight: 600;
`;

export const loginNotice = css`
  text-align: center;
  padding: 40px;
  font-size: 18px;
`;
