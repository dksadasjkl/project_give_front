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
  }
`;

export const deleteBtn = css`
  padding: 7px 14px;
  background: #ef4444;
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
  border: none;

  &:hover {
    background: #dc2626;
  }
`;

export const pagination = css`
  margin-top: 22px;
  display: flex;
  justify-content: center;
  gap: 12px;

  button {
    padding: 6px 12px;
    border-radius: 8px;
    border: 1px solid #d1d5db;

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
  text-align: center;
  padding: 32px 0;
  color: #6b7280;
`;
