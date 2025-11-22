import { css } from '@emotion/react';

export const container = css`
  padding: 20px;
`;

export const title = css`
  font-size: 22px;
  margin-bottom: 20px;
  font-weight: 700;
  color: #222;
`;

export const commentList = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const emptyText = css`
  text-align: center;
  color: #777;
  font-size: 16px;
  margin-top: 40px;
`;

export const pagination = css`
  display: flex;
  justify-content: center;
  gap: 6px;
  margin-top: 30px;

  button {
    padding: 6px 12px;
    border: 1px solid #e3e8ec;
    background: #fff;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.2s ease;
    color: #222;

    &:hover {
      background: #03a94d;
      color: #fff;
    }
  }
`;

export const pageBtn = css`
  border: 1px solid #e3e8ec;
  background: #fff;
  border-radius: 6px;

  &:hover {
    background: #03a94d;
    color: #fff;
  }
`;

export const pageBtnActive = css`
  background: #03a94d !important;
  color: #fff !important;
  border-color: #03a94d !important;
  font-weight: 700;
  cursor: default;
`;
