/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const filterWrap = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0 18px;
  gap: 12px;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const leftGroup = css`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const rightGroup = css`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const btn = (active) => css`
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 13px;
  cursor: pointer;
  border: 1px solid ${active ? "#4F46E5" : "#E5E7EB"};
  background: ${active ? "#4F46E5" : "#FFFFFF"};
  color: ${active ? "#FFFFFF" : "#374151"};
  box-shadow: ${active ? "0 4px 10px rgba(79,70,229,0.35)" : "0 1px 2px rgba(15,23,42,0.04)"};
  transition: background 0.15s ease, color 0.15s ease, box-shadow 0.15s ease,
    transform 0.1s ease, border-color 0.15s ease;

  &:hover {
    background: ${active ? "#4338CA" : "#F3F4FF"};
    border-color: ${active ? "#4338CA" : "#C7D2FE"};
    transform: translateY(-1px);
    box-shadow: 0 6px 14px rgba(15, 23, 42, 0.12);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(15, 23, 42, 0.12);
  }
`;