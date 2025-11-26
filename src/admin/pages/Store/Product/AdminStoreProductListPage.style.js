import { css } from "@emotion/react";

export const wrap = css`
  width: 100%;
  padding: 30px;
`;

export const title = css`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 20px;
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
  background: white;
  border-radius: 12px;
  overflow: hidden;

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
  font-weight: 600;
  cursor: pointer;

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

  &:hover {
    background: #dc2626;
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
