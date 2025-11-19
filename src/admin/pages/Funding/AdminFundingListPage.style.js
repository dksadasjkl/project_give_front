import { css } from "@emotion/react";

export const wrap = css`
  width: 100%;
`;

export const title = css`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const createButton = css`
  padding: 10px 16px;
  background: #1565c0;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    background: #0d47a1;
  }
`;

export const table = css`
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;

  th, td {
    padding: 12px;
    border-bottom: 1px solid #eee;
    font-size: 14px;
  }

  th {
    background: #f0f4f8;
    font-weight: bold;
    text-align: center;
  }

  td {
    text-align: center;
  }
`;

export const thumb = css`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
`;

export const clickable = css`
  cursor: pointer;

  &:hover {
    color: #1565c0;
    text-decoration: underline;
  }
`;

export const deleteButton = css`
  padding: 6px 12px;
  background: #e53935;
  color: white;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #c62828;
  }
`;

export const pagination = css`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 14px;

  button {
    padding: 6px 12px;
    border: 1px solid #ccc;
    background: white;
    border-radius: 6px;
    cursor: pointer;

    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    &:hover:not(:disabled) {
      background: #f5f5f5;
    }
  }

  span {
    display: flex;
    align-items: center;
    font-weight: bold;
  }
`;
