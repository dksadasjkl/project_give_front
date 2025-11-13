import { css } from "@emotion/react";

export const card = css`
  width: 260px;
  border-radius: 12px;
  border: 1px solid #eee;
  padding: 16px;
  background: #fff;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }

  img {
    width: 100%;
    height: 160px;
    border-radius: 8px;
    object-fit: cover;
    margin-bottom: 12px;
  }
`;
