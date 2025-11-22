/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const container = css`
  padding: 24px;
`;

export const title = css`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const table = css`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  th,
  td {
    border: 1px solid #e0e0e0;
    padding: 10px 12px;
    text-align: center;
  }

  th {
    background-color: #f5f5f5;
    font-weight: 600;
  }

  tbody tr:nth-of-type(even) {
    background-color: #fafafa;
  }
`;

export const roleTag = css`
  display: inline-block;
  margin: 2px;
  padding: 2px 6px;
  border-radius: 4px;
  background-color: #eef2ff;
  font-size: 12px;
`;

export const detailBtn = css`
  padding: 6px 10px;
  border-radius: 4px;
  border: none;
  background-color: #2563eb;
  color: #fff;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background-color: #1d4ed8;
  }
`;

export const pagination = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-top: 20px;

  button {
    padding: 6px 12px;
    border-radius: 4px;
    border: 1px solid #d4d4d4;
    background-color: #ffffff;
    cursor: pointer;
    font-size: 13px;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
`;
