import { css } from "@emotion/react";

export const container = css`
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-width: 780px;
  margin: 0 auto;
  padding: 24px 0;

  label {
    font-size: 15px;
    font-weight: 600;
    margin-top: 8px;
  }

  input,
  select,
  textarea {
    padding: 10px 12px;
    border-radius: 8px;
    border: 1px solid #d1d5db;
    font-size: 14px;
    margin-top: 4px;
    transition: 0.15s;

    &:focus {
      border-color: #4f46e5;
      box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.15);
      outline: none;
    }
  }
`;

export const previewImg = css`
  width: 200px;
  border-radius: 10px;
  margin-top: 10px;
  border: 1px solid #e5e7eb;
`;

export const detailBox = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 18px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  background: #fafafa;
`;

export const detailPreview = css`
  width: 260px;
  border-radius: 10px;
  margin-top: 8px;
  border: 1px solid #e5e7eb;
`;

export const submitBtn = css`
  padding: 14px;
  background: #4f46e5;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 26px;

  &:hover {
    background: #4338ca;
  }
`;
