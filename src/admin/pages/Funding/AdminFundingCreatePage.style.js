import { css } from "@emotion/react";

export const container = css`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 24px 30px;

  h1 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 25px;
  }

  label {
    display: block;
    font-size: 15px;
    font-weight: 600;
    margin: 18px 0 8px;
  }

  input,
  select,
  textarea {
    width: 100%;
    padding: 12px;
    font-size: 15px;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    outline: none;
    transition: 0.15s;

    &:focus {
      border-color: #4f46e5;
      box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.15);
    }
  }

  textarea {
    height: 140px;
    resize: vertical;
  }
`;

export const previewImg = css`
  width: 260px;
  border-radius: 10px;
  margin-top: 10px;
  border: 1px solid #e5e7eb;
`;

export const detailBox = css`
  border: 1px solid #e5e7eb;
  padding: 18px;
  margin: 18px 0;
  border-radius: 12px;
  background: #fafafa;
`;

export const detailPreview = css`
  width: 200px;
  border-radius: 10px;
  margin-top: 10px;
  border: 1px solid #e5e7eb;
`;

export const submitBtn = css`
  margin-top: 30px;
  padding: 14px;
  width: 100%;
  background: #4f46e5;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background: #4338ca;
  }
`;
