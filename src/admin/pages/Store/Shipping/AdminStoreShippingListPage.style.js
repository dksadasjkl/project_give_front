import { css } from "@emotion/react";

export const container = css`
  width: 100%;
  margin: 0 auto;
  padding: 24px 30px;
`;

export const title = css`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 24px;
  color: #111827;
`;

export const table = css`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e5e7eb;

  th,
  td {
    padding: 12px 14px;
    font-size: 14px;
    border-bottom: 1px solid #e5e7eb;
    text-align: center;
  }

  th {
    background: #f3f4f6;
    font-weight: 700;
    color: #374151;
  }
`;

export const row = css`
  cursor: pointer;
  transition: 0.15s;

  &:hover {
    background: #f9fafb;
  }
`;

export const pagination = css`
  margin-top: 24px;
  display: flex;
  justify-content: center;
  gap: 14px;

  button {
    padding: 6px 12px;
    background: white;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;

    &:disabled {
      opacity: 0.45;
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
    color: #374151;
  }
`;
