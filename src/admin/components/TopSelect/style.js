import { css } from "@emotion/react";

export const inputBox = css`
  display: flex;
  flex-direction: column;
  gap: 6px;

  label {
    font-size: 14px;
    font-weight: 600;
  }

  select {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;
