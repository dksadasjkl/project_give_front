import { css } from '@emotion/react';

export const banner = css`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: transparent;
  border: 1px solid #d7e2eb;
  border-radius: 15px;
  margin-bottom: 20px;
  padding: 15px 0;

  & > div {
    flex: 1;
    text-align: center;
    font-weight: 500;
    font-size: 16px;
    font-family: "NanumBarunGothic, dotum, Sans-serif";
  }

  & > div:not(:last-child) {
    border-right: 1px solid #d7e2eb;
  }
`;