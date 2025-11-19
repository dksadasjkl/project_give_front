import { css } from "@emotion/react";

export const container = css`
  width: 100%;
`;

export const title = css`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const table = css`
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;

  th, td {
    padding: 12px;
    border-bottom: 1px solid #eee;
    text-align: left;
  }

  th {
    background: #f2f2f2;
    font-weight: bold;
  }
`;

export const deleteBtn = css`
  padding: 6px 12px;
  background: #ff4d4f;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #e04445;
  }
`;

export const pagination = css`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 12px;

  button {
    padding: 6px 12px;
    border: 1px solid #ddd;
    background: #fff;
    border-radius: 6px;
    cursor: pointer;

    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    &:hover:not(:disabled) {
      background: #f7f7f7;
    }
  }

  span {
    display: flex;
    align-items: center;
    font-weight: bold;
  }
`;

export const noData = css`
  margin-top: 40px;
  text-align: center;
  font-size: 16px;
  color: #888;
`;
