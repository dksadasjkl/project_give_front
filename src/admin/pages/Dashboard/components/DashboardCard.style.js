import { css } from "@emotion/react";

export const card = css`
  background: linear-gradient(145deg, #ffffff, #f9fafb);
  padding: 20px 22px;
  border-radius: 18px;
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.06);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  border: 1px solid rgba(229, 231, 235, 0.7);
  transition: transform 0.15s ease-out, box-shadow 0.15s ease-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 18px 40px rgba(15, 23, 42, 0.12);
  }
`;

export const title = css`
  font-size: 13px;
  color: #9ca3af;
`;

export const value = css`
  font-size: 22px;
  font-weight: 700;
  color: #111827;
`;

export const sub = css`
  font-size: 12px;
  color: #6b7280;
`;
