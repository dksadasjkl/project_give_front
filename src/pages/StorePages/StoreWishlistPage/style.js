/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const container = css`
  max-width: 1200px;
  margin: 40px auto;
  font-family: "Pretendard";
  padding: 0 16px;
`;

export const title = css`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 24px;
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

export const grid = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
`;

export const card = css`
  border: 1px solid #ddd;
  border-radius: 12px;
  background: #fff;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  }
`;

export const image = css`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

export const info = css`
  padding: 10px;
  text-align: center;

  h3 {
    font-size: 16px;
    margin: 8px 0;
  }
`;

export const price = css`
  color: #0078ff;
  font-weight: 600;
`;

export const removeBtn = css`
  margin-top: 10px;
  padding: 6px 10px;
  border: none;
  border-radius: 6px;
  background: #ff6b6b;
  color: white;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: #ff4040;
  }
`;

export const loginNotice = css`
  text-align: center;
  padding: 40px;
  font-size: 18px;
`;
