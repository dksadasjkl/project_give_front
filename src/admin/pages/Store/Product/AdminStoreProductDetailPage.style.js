import { css } from "@emotion/react";

export const container = css`
  width: 980px;
  margin: 0 auto;
  padding: 30px 0;
`;

export const title = css`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 25px;
`;

export const card = css`
  display: flex;
  gap: 30px;
  background: #fff;
  padding: 25px;
  border-radius: 14px;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.08);
`;

export const thumb = css`
  width: 300px;
  height: 300px;
  border-radius: 12px;
  object-fit: cover;
`;

export const infoBox = css`
  flex: 1;
  font-size: 15px;

  p {
    margin: 8px 0;
  }
`;

export const originalPrice = css`
  color: #999;
  text-decoration: line-through;
  margin-left: 4px;
`;

export const active = css`
  color: #2e7d32;
  font-weight: bold;
`;

export const inactive = css`
  color: #c62828;
  font-weight: bold;
`;

export const description = css`
  margin-top: 15px;
  white-space: pre-wrap;
`;

export const detailSection = css`
  margin-top: 30px;
  text-align: center;
`;

export const toggleBtn = css`
  padding: 10px 16px;
  background: #f1f1f1;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid #ddd;
  margin-bottom: 16px;

  &:hover {
    background: #e4e4e4;
  }
`;

export const detailImage = css`
  width: 100%;
  max-width: 700px;
  height: auto;
  border-radius: 10px;
`;

export const buttonGroup = css`
  margin-top: 30px;
  display: flex;
  gap: 12px;
`;

export const editBtn = css`
  padding: 10px 16px;
  background: #1565c0;
  color: white;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #0d47a1;
  }
`;

export const deleteBtn = css`
  padding: 10px 16px;
  background: #ef4444;
  color: white;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #dc2626;
  }
`;
