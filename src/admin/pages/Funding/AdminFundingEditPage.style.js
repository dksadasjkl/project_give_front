import { css } from "@emotion/react";

export const header = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const title = css`
  font-size: 28px;
  font-weight: bold;
`;

export const button = css`
  padding: 10px 16px;
  background: #1565c0;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background: #0d47a1;
  }
`;

export const imageUploadRow = css`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const previewImg = css`
  width: 150px;
  height: 110px;
  border-radius: 10px;
  object-fit: cover;
  border: 1px solid #ddd;
`;

export const uploadButton = css`
  padding: 8px 14px;
  background: #424242;
  color: white;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #212121;
  }
`;

export const hiddenFileInput = css`
  display: none;
`;
