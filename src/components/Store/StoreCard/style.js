import { css } from "@emotion/react";

export const card = css`
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: white;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

export const imageWrapper = css`
  width: 100%;
  height: 220px;
  overflow: hidden;
`;

export const image = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const info = css`
  padding: 15px;
`;

export const name = css`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const price = css`
  font-size: 1rem;
  color: #333;
`;

export const originalPrice = css`
  font-size: 0.9rem;
  color: #aaa;
  text-decoration: line-through;
  margin-left: 6px;
`;
