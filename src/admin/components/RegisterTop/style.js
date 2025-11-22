import { css } from "@emotion/react";

export const container = css`
  margin-top: 20px;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 6px;
`;

export const row = css`
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
`;

export const submitBtn = css`
  margin-top: 20px;
  padding: 10px 16px;
  background: #4f46e5;
  color: #fff;
  border-radius: 6px;
  cursor: pointer;
  float: right;

  &:hover {
    background: #4338ca;
  }
`;
