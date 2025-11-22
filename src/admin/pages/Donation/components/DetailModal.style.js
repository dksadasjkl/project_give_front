import { css } from "@emotion/react";

export const overlay = css`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 30;
`;

export const modal = css`
  width: 520px;
  background: #ffffff;
  border-radius: 14px;
  padding: 28px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.12);
`;

export const title = css`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const label = css`
  font-size: 14px;
  font-weight: 600;
  margin-top: 16px;
  display: block;
`;

export const input = css`
  width: 100%;
  padding: 10px 12px;
  margin-top: 6px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  font-size: 14px;
  transition: 0.15s;

  &:focus {
    border-color: #4f46e5;
    box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.15);
    outline: none;
  }
`;

export const textarea = css`
  width: 100%;
  padding: 10px 12px;
  height: 130px;
  resize: none;
  margin-top: 6px;
  border-radius: 8px;
  border: 1px solid #d1d5db;

  &:focus {
    border-color: #4f46e5;
    box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.15);
    outline: none;
  }
`;

export const file = css`
  margin-top: 8px;
`;

export const preview = css`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  margin-top: 12px;
`;

export const btnBox = css`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 28px;
`;

export const saveBtn = css`
  padding: 10px 18px;
  background: #4f46e5;
  color: white;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  &:hover {
    background: #4338ca;
  }
`;

export const cancelBtn = css`
  padding: 10px 18px;
  background: #e5e7eb;
  color: #374151;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  &:hover {
    background: #d1d5db;
  }
`;
