import { css } from "@emotion/react";

export const container = css`
  width: 100%;
  padding: 24px 30px;
`;

export const title = css`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 24px;
`;

export const table = css`
  width: 100%;
  border-collapse: collapse;
  background: #ffffff;
  border-radius: 10px;
  overflow: hidden;

  th, td {
    padding: 12px 14px;
    border-bottom: 1px solid #e5e7eb;
    text-align: center;
    font-size: 14px;
  }

  th {
    background: #f3f4f6;
    font-weight: 700;
    color: #374151;
  }
`;

export const deleteBtn = css`
  padding: 6px 12px;
  background: #ef4444;
  color: #fff;
  border-radius: 6px;
  border: none;
  cursor: pointer;

  &:hover {
    background: #dc2626;
  }
`;

export const pagination = css`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 12px;

  button {
    padding: 6px 12px;
    border: 1px solid #d1d5db;
    background: #ffffff;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:hover:not(:disabled) {
      background: #f3f4f3;
    }
  }

  span {
    display: flex;
    align-items: center;
    font-weight: 600;
  }
`;

export const noData = css`
  padding: 40px 0;
  text-align: center;
  color: #6b7280;
`;
