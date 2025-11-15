import { css } from "@emotion/react";

export const card = css`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  padding: 8px;
  border-radius: 12px;
  background: #fafafa;
  transition: 0.2s;

  &:hover {
    background: #f0f0f0;
    cursor: pointer;
  }
`;

export const thumb = css`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  object-fit: cover;
`;

export const info = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const title = css`
  font-size: 15px;
  font-weight: 600;
`;

export const org = css`
  font-size: 13px;
  color: #777;
`;

export const date = css`
  margin-top: 5px;
  font-size: 12px;
  color: #999;
`;
