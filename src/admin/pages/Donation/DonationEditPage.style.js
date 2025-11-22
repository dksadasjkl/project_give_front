import { css } from "@emotion/react";

export const header = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

export const title = css`
  font-size: 26px;
  font-weight: 700;
`;

export const button = css`
  padding: 10px 18px;
  background: #4f46e5;
  color: white;
  border-radius: 8px;
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
  width: 200px;
  height: 200px;
  border-radius: 12px;
  object-fit: cover;
  border: 1px solid #e5e7eb;
`;

export const uploadButton = css`
  background: #4f46e5;
  color: white;
  padding: 10px 18px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: #4338ca;
  }
`;

export const hiddenFileInput = css`
  display: none;
`;
