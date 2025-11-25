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
    border-bottom: 1px solid #e5e7eb;
    text-align: center;
    font-size: 14px;
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

export const clickable = css`
  cursor: pointer;
  font-weight: 600;

  &:hover {
    color: #1565c0;
    text-decoration: underline;
  }
`;

export const productCell = css`
  display: flex;
  align-items: center;
  gap: 12px;
  
  span {
    display: flex;
    align-items: center;
    line-height: 1.2;
  }
`;

export const thumb = css`
  width: 52px;
  height: 52px;
  border-radius: 8px;
  object-fit: cover;
  border: 1px solid #e5e7eb;
  cursor: pointer;
  flex-shrink: 0;  
`;

export const statusTag = css`
  padding: 4px 8px;
  background: #eef2ff;
  color: #4f46e5;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
`;

export const deleteButton = css`
  padding: 6px 12px;
  background: #ef4444;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  font-size: 13px;
  border: none;

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
    background: #ffffff;
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
