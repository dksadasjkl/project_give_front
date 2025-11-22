import { css } from "@emotion/react";

export const container = css`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 24px 30px;
`;

export const title = css`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 30px;
`;

export const form = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: #fff;
  padding: 22px;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  max-width: 650px;
`;

export const label = css`
  font-weight: 600;
  font-size: 15px;
`;

export const input = css`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const textarea = css`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  height: 120px;
  resize: none;
`;

export const select = css`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const previewBox = css`
  width: 150px;
  height: 150px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const previewImage = css`
  width: 150px;
  height: 150px;
  object-fit: cover;
`;

export const previewBoxLarge = css`
  width: 100%;
  max-width: 400px;
  max-height: 400px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const previewLargeImage = css`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

export const previewPlaceholder = css`
  color: #aaa;
  font-size: 13px;
`;

export const buttonGroup = css`
  margin-top: 25px;
  display: flex;
  gap: 12px;
`;

export const saveBtn = css`
  background: #1565c0;
  color: white;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  width: 120px;

  &:hover {
    background: #0d47a1;
  }
`;

export const cancelBtn = css`
  background: #ccc;
  color: black;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  width: 120px;

  &:hover {
    background: #b3b3b3;
  }
`;
