import { css } from "@emotion/react";

export const header = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 26px;
`;

export const title = css`
  font-size: 28px;
  font-weight: 700;
`;

export const button = css`
  padding: 10px 18px;
  background: #4f46e5;
  color: white;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background: #4338ca;
  }
`;

export const imageUploadRow = css`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const previewImg = css`
  width: 160px;
  height: 120px;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
`;

export const uploadButton = css`
  padding: 8px 14px;
  background: #6b7280;
  color: white;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #4b5563;
  }
`;

export const hiddenFileInput = css`
  display: none;
`;
