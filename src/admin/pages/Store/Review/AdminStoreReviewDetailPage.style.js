import { css } from "@emotion/react";

export const container = css`
  width: 100%;
  padding: 20px;
`;

export const title = css`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 24px;
`;

export const section = css`
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 24px;
  border: 1px solid #e0e0e0;
`;

export const sectionTitle = css`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
`;

export const infoRow = css`
  display: flex;
  align-items: center;
  margin-bottom: 12px;

  span {
    width: 140px;
    font-weight: 600;
    color: #333;
  }

  p {
    flex: 1;
    color: #555;
  }
`;

export const profileImg = css`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid #ddd;
`;

export const commentText = css`
  font-size: 15px;
  color: #444;
  white-space: pre-wrap;
  padding: 10px 0;
`;

export const buttonGroup = css`
  display: flex;
  gap: 12px;
  margin-top: 10px;
`;

export const deleteBtn = css`
  padding: 10px 16px;
  background: #d32f2f;
  color: white;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #b71c1c;
  }
`;

export const backBtn = css`
  padding: 10px 16px;
  background: #777;
  color: white;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #555;
  }
`;
