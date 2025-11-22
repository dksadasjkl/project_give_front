import { css } from "@emotion/react";

export const container = css`
  padding: 30px;
`;

export const title = css`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 24px;
`;

export const detailBox = css`
  display: flex;
  gap: 30px;
  margin-bottom: 28px;
`;

export const thumbnail = css`
  width: 330px;
  height: 260px;
  object-fit: cover;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
`;

export const infoBox = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;

  strong {
    font-weight: 600;
  }
`;

export const projectTitle = css`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 6px;
`;

const baseButton = css`
  padding: 10px 18px;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-right: 10px;
`;

export const editBtn = css`
  ${baseButton};
  background: #4f46e5;

  &:hover {
    background: #4338ca;
  }
`;

export const manageBtn = css`
  ${baseButton};
  background: #6b7280;

  &:hover {
    background: #4b5563;
  }
`;

export const rewardBtn = css`
  ${baseButton};
  background: #3b82f6;

  &:hover {
    background: #2563eb;
  }
`;
