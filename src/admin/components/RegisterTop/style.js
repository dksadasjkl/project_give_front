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
  margin-top: 10px;
  padding: 8px 14px;
  background: #333;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #555;
  }
`;
