import { css } from "@emotion/react";

export const card = css`
  display: flex;
  gap: 10px;
  padding: 8px 10px;
  margin-bottom: 10px;
  border-radius: 12px;
  background: #f9fafb;
  border: 1px solid transparent;
  transition: 0.15s ease-out;
  align-items: center;

  &:hover {
    background: #f3f4ff;
    border-color: #e5e7eb;
    cursor: pointer;
    transform: translateY(-1px);
    box-shadow: 0 8px 18px rgba(15, 23, 42, 0.08);
  }
`;

export const thumb = css`
  width: 56px;
  height: 56px;
  border-radius: 10px;
  object-fit: cover;
  flex-shrink: 0;
`;

export const info = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const name = css`
  font-size: 13px;
  font-weight: 600;
  color: #111827;
`;

export const price = css`
  margin-top: 4px;
  font-size: 12px;
  color: #4b5563;
`;
