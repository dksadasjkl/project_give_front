import { css } from "@emotion/react";

export const card = css`
  display: flex;
  gap: 10px;
  padding: 8px;
  margin-bottom: 10px;
  border-radius: 10px;
  background: #fafafa;
  transition: 0.15s;

  &:hover {
    background: #f3f4f6;
    cursor: pointer;
  }
`;

export const thumb = css`
  width: 56px;
  height: 56px;
  border-radius: 8px;
  object-fit: cover;
`;

export const info = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const name = css`
  font-size: 14px;
  font-weight: 600;
`;

export const price = css`
  margin-top: 4px;
  font-size: 13px;
  color: #4b5563;
`;
