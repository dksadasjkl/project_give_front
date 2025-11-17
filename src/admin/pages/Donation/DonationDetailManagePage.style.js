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
  padding: 18px;
  border-radius: 14px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const subtitle = css`
  font-weight: 600;
  font-size: 17px;
`;

export const thumb = css`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid #ddd;
`;

export const order = css`
  font-size: 14px;
  color: #666;
`;

export const cardButtons = css`
  display: flex;
  gap: 10px;
`;

export const editBtn = css`
  flex: 1;
  padding: 8px;
  border-radius: 6px;
  background: #3b82f6;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background: #2563eb;
  }
`;

export const deleteBtn = css`
  flex: 1;
  padding: 8px;
  border-radius: 6px;
  background: #ef4444;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background: #dc2626;
  }
`;
