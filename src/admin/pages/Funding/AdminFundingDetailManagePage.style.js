import { css } from "@emotion/react";

export const container = css`
  padding: 30px;
`;

export const title = css`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const addButton = css`
  background: #4f46e5;
  color: white;
  padding: 10px 18px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 15px;
  margin-bottom: 20px;

  &:hover {
    background: #4338ca;
  }
`;

export const listBox = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
`;

export const card = css`
  background: white;
  padding: 20px;
  border-radius: 14px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const subtitle = css`
  font-size: 16px;
  font-weight: 700;
`;

export const thumb = css`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
`;

export const order = css`
  font-size: 14px;
  color: #6b7280;
`;

export const cardButtons = css`
  display: flex;
  gap: 10px;
`;

export const editBtn = css`
  flex: 1;
  padding: 8px 10px;
  background: #3b82f6;
  color: white;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #2563eb;
  }
`;

export const deleteBtn = css`
  flex: 1;
  padding: 8px 10px;
  background: #ef4444;
  color: white;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #dc2626;
  }
`;
