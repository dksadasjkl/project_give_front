import { css } from '@emotion/react';

export const banner = css`
  display: flex;
  justify-content: center;
  width: 100%;
  border: 1px solid #e3e8ec;
  border-radius: 12px;
  padding: 18px 0;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0,0,0,0.04);
  margin-bottom: 20px;

  div {
    flex: 1;
    text-align: center;
    font-weight: 600;
    font-size: 15px;
    color: #222;
  }

  div:not(:last-child) {
    border-right: 1px solid #e3e8ec;
  }
`;
