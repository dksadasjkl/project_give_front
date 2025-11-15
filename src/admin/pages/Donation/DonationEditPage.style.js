import { css } from "@emotion/react";

export const header = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

export const title = css`
  font-size: 24px;
  font-weight: 700;
`;

export const button = css`
  padding: 8px 16px;
  border: none;
  background: #2e7dff;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;

  &:hover {
    background: #1a5fd1;
  }
`;

export const imageSection = css`
  margin-top: 30px;
  display: flex;
  justify-content: flex-start;
`;

export const imageUploadWrap = css`
  display: flex;
  align-items: center;
  gap: 20px;
`;


export const imageUploadRow = css`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const previewImg = css`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid #ddd;
`;

export const uploadButton = css`
  background: #2e7dff;
  color: white;
  padding: 10px 18px;
  border-radius: 6px;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  font-size: 14px;
  text-align: center;

  &:hover {
    background: #1b59d4;
  }
`;

export const hiddenFileInput = css`
  display: none;
`;
