/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const filterWrap = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  margin-top: 8px;
`;

export const leftGroup = css`
  display: flex;
  gap: 8px;
`;

export const rightGroup = css`
  display: flex;
  gap: 8px;
`;

export const btn = (active) => css`
  padding: 8px 14px;
  border-radius: 8px;
  font-size: 13px;
  cursor: pointer;
  border: none;
  transition: 0.2s;

  background: ${active ? "#4F46E5" : "#F3F4F6"};
  color: ${active ? "#fff" : "#374151"};
  box-shadow: ${active ? "0 2px 6px rgba(0,0,0,0.15)" : "none"};

  &:hover {
    background: ${active ? "#4338CA" : "#E5E7EB"};
  }
`;
