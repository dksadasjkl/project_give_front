import { css } from "@emotion/react";

export const container = css`
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-width: 720px;
  margin: 0 auto;
`;

export const previewImg = css`
  width: 160px;
  height: auto;
  margin-top: 8px;
  border-radius: 6px;
`;

export const detailPreview = css`
  width: 240px;
  margin-top: 6px;
  border-radius: 6px;
`;

export const detailBox = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 12px;
`;

export const rewardBox = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 14px;
`;

export const submitBtn = css`
  padding: 14px;
  background: #4a6cf7;
  color: white;
  border-radius: 10px;
  margin-top: 20px;
  cursor: pointer;
`;
