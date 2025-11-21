import { css } from "@emotion/react";

export const container = css`
  width: 100%;
  padding: 20px;
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
    text-align: center;
    font-size: 14px;
  }

  th {
    background: #eef3f8;
    font-weight: 700;
  }
`;

export const profileImg = css`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const reviewText = css`
  max-width: 240px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const detailBtn = css`
  padding: 6px 12px;
  background: #1976d2;
  color: white;
  border-radius: 6px;
  cursor: pointer;

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
    border-radius: 6px;
    border: 1px solid #ccc;
    background: white;
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
