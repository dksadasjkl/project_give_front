import { css } from "@emotion/react";

export const box = css`
  background: #ffffff;
  padding: 20px 22px;
  border-radius: 18px;
  box-shadow: 0 10px 28px rgba(15, 23, 42, 0.06);
  border: 1px solid #e5e7eb;
`;

export const title = css`
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 14px;
  color: #111827;
`;

export const table = css`
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
  table-layout: fixed;

  th {
    text-align: left;
    font-size: 12px;
    color: #6b7280;
    border-bottom: 1px solid #e5e7eb;
    padding: 8px 0;
    font-weight: 500;
  }

  td {
    padding: 9px 0;
    border-bottom: 1px solid #f3f4f6;
    color: #374151;
    vertical-align: middle;
    word-break: break-all;
  }

  tr:last-of-type td {
    border-bottom: none;
  }
`;

export const empty = css`
  text-align: center;
  color: #9ca3af;
  padding: 18px 0;
  font-size: 13px;
`;
