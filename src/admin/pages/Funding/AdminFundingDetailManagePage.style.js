import { css } from "@emotion/react";

export const container = css`
  padding: 20px;
`;

export const title = css`
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const addButton = css`
  padding: 10px 14px;
  background: #1565c0;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    background: #0d47a1;
  }
`;

export const listBox = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
`;

export const card = css`
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 8px;
  background: white;
`;

export const subtitle = css`
  font-size: 18px;
  margin-bottom: 12px;
  font-weight: bold;
`;

export const thumb = css`
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 12px;
`;

export const order = css`
  font-size: 14px;
  margin-bottom: 12px;
  color: #555;
`;

export const cardButtons = css`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const editBtn = css`
  padding: 6px 12px;
  background: #4caf50;
  color: white;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #388e3c;
  }
`;

export const deleteBtn = css`
  padding: 6px 12px;
  background: #d32f2f;
  color: white;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #b71c1c;
  }
`;
