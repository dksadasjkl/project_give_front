import { css } from "@emotion/react";

export const container = css`
  padding: 40px;
  font-family: "Pretendard";
`;

export const title = css`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 25px;
`;

export const cardGrid = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;
`;

export const loadMoreBtn = css`
  display: block;
  margin: 40px auto 0;
  padding: 12px 28px;
  border: none;
  border-radius: 8px;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
