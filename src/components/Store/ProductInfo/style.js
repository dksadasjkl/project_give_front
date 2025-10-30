/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const container = css`
  display: flex;
  gap: 40px;
  align-items: flex-start;
  padding: 30px 20px;
  border-bottom: 1px solid #eee;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const imageBox = css`
  flex: 1;
  max-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const image = css`
  width: 100%;
  max-width: 350px;
  border-radius: 12px;
  border: 1px solid #ddd;
  object-fit: cover;
`;

export const infoBox = css`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const title = css`
  font-size: 24px;
  font-weight: 700;
  color: #222;
`;

export const discount = css`
  font-size: 15px;
  font-weight: 600;
  color: #ff4b4b;
`;

export const priceBox = css`
  display: flex;
  align-items: baseline;
  gap: 8px;
`;

export const originalPrice = css`
  font-size: 14px;
  color: #999;
  text-decoration: line-through;
`;

export const price = css`
  font-size: 22px;
  font-weight: 700;
  color: #0078ff;
`;

export const desc = css`
  margin-top: 10px;
  font-size: 15px;
  color: #444;
  line-height: 1.5;
`;

export const stock = css`
  font-size: 14px;
  color: #666;
  margin-top: 10px;
`;

export const date = css`
  font-size: 13px;
  color: #aaa;
`;
