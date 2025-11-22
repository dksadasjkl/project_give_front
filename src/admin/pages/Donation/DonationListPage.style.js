import { css } from "@emotion/react";

export const wrap = css`
  width: 100%;
  padding: 30px 20px;
  margin: 0 auto;
`;

export const title = css`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 24px;
  color: #111827;
`;

export const createButton = css`
  padding: 10px 18px;
  background: #4f46e5;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 24px;
  font-size: 14px;
  font-weight: 600;

  &:hover {
    background: #4338ca;
  }
`;

export const table = css`
  width: 100%;
  border-collapse: collapse;
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e5e7eb;

  th,
  td {
    padding: 12px 14px;
    border-bottom: 1px solid #e5e7eb;
    text-align: center;
    font-size: 14px;
    color: #111827;
  }

  th {
    background: #f3f4f6;
    font-weight: 700;
    color: #374151;
  }

  tr:hover td {
    background: #fafafa;
  }
`;

export const thumb = css`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  object-fit: cover;
  border: 1px solid #e5e7eb;
`;

export const clickable = css`
  cursor: pointer;
  font-weight: 600;

  &:hover {
    color: #1565c0;
    text-decoration: underline;
  }
`;

export const deleteButton = css`
  padding: 7px 14px;
  background: #ef4444;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  font-size: 13px;

  &:hover {
    background: #dc2626;
  }
`;

export const pagination = css`
  margin-top: 24px;
  display: flex;
  justify-content: center;
  gap: 12px;

  button {
    padding: 6px 12px;
    background: white;
    border: 1px solid #d1d5db;
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
    color: #374151;
  }
`;
