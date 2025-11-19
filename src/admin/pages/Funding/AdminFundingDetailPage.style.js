import { css } from "@emotion/react";

export const container = css`
  padding: 20px;
`;

export const title = css`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const detailBox = css`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

export const thumbnail = css`
  width: 350px;
  height: 260px;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid #ddd;
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
  font-weight: bold;
`;

export const editBtn = css`
  background: #0d47a1;
  color: white;
  padding: 12px 18px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background: #08306b;
  }
`;

export const manageBtn = css`
  background: #616161;
  color: white;
  padding: 10px 16px;
  font-size: 15px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background: #424242;
  }
`;

export const rewardBtn = css`
  background: #1565c0;
  color: white;
  padding: 10px 16px;
  font-size: 15px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background: #0d47a1;
  }
`;
