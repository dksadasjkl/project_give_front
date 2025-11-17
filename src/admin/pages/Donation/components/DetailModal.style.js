import { css } from "@emotion/react";

export const overlay = css`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.45);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 30;
`;

export const modal = css`
  width: 480px;
  background: white;
  border-radius: 14px;
  padding: 24px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
`;

export const title = css`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const label = css`
  font-size: 14px;
  font-weight: 600;
  margin-top: 15px;
  display: block;
`;

export const input = css`
  width: 100%;
  padding: 10px;
  margin-top: 6px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 14px;
`;

export const textarea = css`
  width: 100%;
  padding: 10px;
  height: 120px;
  resize: none;
  margin-top: 6px;
  border-radius: 8px;
  border: 1px solid #ddd;
`;

export const file = css`
  margin-top: 6px;
`;

export const preview = css`
  width: 100%;
  height: 150px;
  margin-top: 10px;
  border-radius: 10px;
  object-fit: cover;
  border: 1px solid #ddd;
`;

export const btnBox = css`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`;

export const saveBtn = css`
  padding: 10px 16px;
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
  padding: 10px 16px;
  background: #e5e7eb;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  &:hover {
    background: #d1d5db;
  }
`;
