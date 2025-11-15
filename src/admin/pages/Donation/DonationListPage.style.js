import { css } from "@emotion/react";

export const title = css`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
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

export const row = css`
  cursor: pointer;
  &:hover {
    background: #fafafa;
  }
`;
