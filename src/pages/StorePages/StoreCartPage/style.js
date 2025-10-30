/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const container = css`
  max-width: 1000px;
  margin: 40px auto;
  padding: 0 16px;
  font-family: "Pretendard";
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

export const cartItem = css`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding: 12px 0;
  gap: 16px;
`;

export const image = css`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
`;

export const info = css`
  flex: 1;

  h3 {
    font-size: 18px;
    margin-bottom: 6px;
  }

  p {
    margin-bottom: 8px;
    font-weight: 500;
  }
`;

export const quantityBox = css`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;

  button {
    width: 28px;
    height: 28px;
    border: none;
    border-radius: 6px;
    background: #e0e0e0;
    cursor: pointer;
    font-size: 18px;
    line-height: 1;

    &:hover {
      background: #ccc;
    }
  }

  span {
    font-size: 16px;
    font-weight: 500;
  }
`;

export const deleteBtn = css`
  border: none;
  background: #ff6b6b;
  color: #fff;
  padding: 6px 10px;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #ff4040;
  }
`;

export const summary = css`
  margin-top: 40px;
  text-align: center;
  border-top: 2px solid #eee;
  padding-top: 20px;
`;

export const total = css`
  font-size: 22px;
  font-weight: 700;
  margin: 12px 0;
  color: #0078ff;
`;

export const orderBtn = css`
  background: #0078ff;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background: #0060cc;
  }
`;

export const loginNotice = css`
  text-align: center;
  padding: 40px;
  font-size: 18px;
`;