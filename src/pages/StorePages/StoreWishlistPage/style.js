/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const container = css`
  max-width: 1200px;
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
  padding: 60px;
  font-size: 18px;
  color: #666;
`;

export const empty = css`
  text-align: center;
  color: #777;
  padding: 40px;
  font-size: 16px;
`;

export const grid = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;
`;

export const card = css`
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 14px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  cursor: pointer;
  transition: all 0.25s ease;
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.12);
  }
`;

export const imageBox = css`
  width: 100%;
  height: 220px;
  overflow: hidden;
  border-bottom: 1px solid #f1f1f1;
`;

export const image = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  ${card}:hover & {
    transform: scale(1.05);
  }
`;

export const info = css`
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;

  h3 {
    font-size: 16px;
    font-weight: 600;
    color: #333;
    text-align: center;
    line-height: 1.4;
  }
`;

export const price = css`
  color: #007bff;
  font-weight: 700;
  font-size: 15px;
`;

export const removeBtn = css`
  margin-top: 8px;
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  background: #ff5b5b;
  color: white;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background: #e04848;
  }
`;

export const loginNotice = css`
  text-align: center;
  padding: 50px;
  font-size: 18px;
  color: #555;
`;
