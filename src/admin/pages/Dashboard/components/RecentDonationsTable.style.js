import { css } from "@emotion/react";

export const box = css`
  background: #fff;
  padding: 20px;
  border-radius: 14px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
`;

export const title = css`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 15px;
`;

export const table = css`
  width: 100%;
  border-collapse: collapse;

  th {
    text-align: left;
    font-size: 13px;
    color: #6b7280;
    border-bottom: 1px solid #e5e7eb;
    padding-bottom: 8px;
  }

  td {
    padding: 10px 0;
    border-bottom: 1px solid #f3f4f6;
  }
`;
