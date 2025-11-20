import { css } from "@emotion/react";

export const container = css`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

export const title = css`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const form = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: #fff;
  padding: 22px;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
`;

export const label = css`
  font-weight: 600;
  font-size: 14px;
`;

export const input = css`
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
`;

export const textarea = css`
  padding: 10px 12px;
  height: 120px;
  border: 1px solid #ccc;
  border-radius: 8px;
  resize: none;
  font-size: 14px;
`;

export const select = css`
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  background: white;
`;

/* 🔥 미리보기 */
export const previewBox = css`
  width: 150px;
  height: 150px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  background: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const previewBoxLarge = css`
  width: 100%;
  max-width: 400px;
  max-height: 400px;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  background: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const previewImage = css`
  width: 150px;
  height: 150px;
  object-fit: cover;
`;

export const previewLargeImage = css`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

export const previewPlaceholder = css`
  color: #999;
  font-size: 13px;
`;

export const buttonGroup = css`
  margin-top: 20px;
  display: flex;
  gap: 10px;
`;

export const submitBtn = css`
  padding: 10px 16px;
  background: #1565c0;
  color: white;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #0d47a1;
  }
`;

export const cancelBtn = css`
  padding: 10px 16px;
  background: #b0bec5;
  color: white;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #90a4ae;
  }
`;
