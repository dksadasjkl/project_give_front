/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const container = css`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  font-family: "Pretendard";
`;

export const title = css`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 24px;
  font-weight: 700;
  color: #111;
  margin-bottom: 28px;
  font-family: "Pretendard", "NanumSquareWebFont", sans-serif;
`;

export const loading = css`
  text-align: center;
  padding: 50px;
`;

export const empty = css`
  text-align: center;
  color: #777;
  padding: 40px;
`;

export const tableWrapper = css`
  overflow-x: auto;
  border-radius: 10px;
  border: 1px solid #ddd;
  background: #fff;
`;

export const table = css`
  width: 100%;
  border-collapse: collapse;
  text-align: center;

  th, td {
    padding: 14px 10px;
    border-bottom: 1px solid #eee;
  }

  th {
    background: #f8f8f8;
    font-weight: 600;
  }
`;

export const plus = css`
  color: #0078ff;
  font-weight: 600;
`;

export const minus = css`
  color: #e74c3c;
  font-weight: 600;
`;

export const loginNotice = css`
  text-align: center;
  padding: 40px;
  font-size: 18px;
`;

export const pagination = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  margin-top: 30px;

  button {
    padding: 6px 10px;
    border: 1px solid #ccc;
    background: #fff;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.2s;

    &:hover {
      background: #007bff;
      color: #fff;
    }

    &:disabled {
      background: #eee;
      color: #aaa;
      cursor: not-allowed;
    }
  }
`;

export const pageBtn = css`
  padding: 6px 10px;
  border: 1px solid #ccc;
  background: #fff;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s;

  &:hover {
    background: #0078ff;
    color: #fff;
  }
`;

export const pageBtnActive = css`
  background: #0078ff !important;
  color: #fff !important;
  border: 1px solid #0078ff !important;
  font-weight: 600;
  cursor: default;
`;
