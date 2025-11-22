/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const toggleWrap = css`
  display: flex;
  gap: 10px;
  margin-bottom: 12px;
`;

export const toggleBtn = css`
  padding: 6px 14px;
  border-radius: 8px;
  border: 1px solid #ddd;
  background: #f7f7f7;
  font-size: 13px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #eee;
  }
`;

export const active = css`
  background: #4f46e5 !important;
  color: white !important;
  border-color: #4f46e5 !important;
`;
