import { css } from "@emotion/react";

export const container = css`
  width: 100%;
`;

export const title = css`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const table = css`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 10px;
  overflow: hidden;

  th,
  td {
    padding: 12px;
    border-bottom: 1px solid #eee;
    font-size: 14px;
    text-align: center;
  }

  th {
    background: #eef3f8;
    font-weight: 700;
  }
`;

export const reason = css`
  max-width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const detailBtn = css`
  padding: 6px 12px;
  background: #1565c0;
  color: #fff;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;

  &:hover {
    background: #0d47a1;
  }
`;

export const pagination = css`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 12px;

  button {
    padding: 6px 12px;
    border: 1px solid #ccc;
    background: white;
    border-radius: 6px;
    cursor: pointer;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:hover:not(:disabled) {
      background: #f3f3f3;
    }
  }

  span {
    display: flex;
    align-items: center;
    font-weight: bold;
  }
`;
