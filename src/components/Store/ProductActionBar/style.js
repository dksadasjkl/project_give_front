import { css } from "@emotion/react";

export const container = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  padding: 20px;
  border-top: 1px solid #eee;
`;

export const quantityBox = css`
  display: flex;
  align-items: center;
  gap: 10px;

  button {
    width: 30px;
    height: 30px;
    border: 1px solid #ddd;
    background: #fff;
    font-size: 18px;
    cursor: pointer;
    border-radius: 6px;
    transition: 0.2s;

    &:hover {
      background: #f3f3f3;
    }
  }

  span {
    min-width: 25px;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
  }
`;

export const actions = css`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const baseBtn = css`
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
`;

export const wishlistBtn = css`
  ${baseBtn};
  background: #fff0f0;
  color: #e84118;
  &:hover {
    background: #ffe3e3;
  }
`;

export const cartBtn = css`
  ${baseBtn};
  background: #f1f3ff;
  color: #2e4bff;
  &:hover {
    background: #e0e4ff;
  }
`;

export const orderBtn = css`
  ${baseBtn};
  background: #007bff;
  color: white;
  &:hover {
    background: #0069d9;
  }
`;
