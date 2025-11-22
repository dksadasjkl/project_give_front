import { css } from "@emotion/react";

export const container = css`
  width: 100%;
  padding: 30px;
`;

export const title = css`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 28px;
`;

export const detailBox = css`
  display: flex;
  gap: 30px;
  margin-bottom: 30px;
`;

export const thumbnail = css`
  width: 280px;
  height: 280px;
  object-fit: cover;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
`;

export const infoBox = css`
  display: flex;
  flex-direction: column;
  font-size: 16px;

  p {
    margin: 6px 0;
  }
`;

export const projectTitle = css`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const editBtn = css`
  padding: 10px 18px;
  background: #4f46e5;
  color: white;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  margin: 6px 5px;

  &:hover {
    background: #4338ca;
  }
`;

export const detailManageBtn = css`
  padding: 10px 18px;
  background: #6b7280;
  color: white;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  margin: 6px 5px;

  &:hover {
    background: #4b5563;
  }
`;
