import { css } from '@emotion/react';

export const container = css`
  padding: 20px;
`;

export const title = css`
  font-size: 22px;
  margin-bottom: 20px;
  font-weight: 700;
`;

export const commentList = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const emptyText = css`
  text-align: center;
  color: #888;
  font-size: 16px;
  margin-top: 40px;
`;

export const pagination = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  margin-top: 30px;

  button {
    padding: 6px 10px;
    border: 1px solid #ccc;
    background: #fff;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.2s;

    &:hover {
      background: #007bff;
      color: #fff;
    }

    &:disabled {
      background: #eee;
      color: #aaa;
      cursor: not-allowed;
    }
  }
`;

export const pageBtn = css`
  padding: 6px 10px;
  border: 1px solid #ccc;
  background: #fff;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s;

  &:hover {
    background: #0078ff;
    color: #fff;
  }
`;

export const pageBtnActive = css`
  background: #0078ff !important;
  color: #fff !important;
  border: 1px solid #0078ff !important;
  font-weight: 600;
  cursor: default;
`;
