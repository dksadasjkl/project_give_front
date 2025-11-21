import { css } from "@emotion/react";

export const container = css`
  width: 100%;
`;

export const title = css`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const table = css`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;

  th, td {
    padding: 12px;
    font-size: 14px;
    border-bottom: 1px solid #eee;
    text-align: center;
  }

  th {
    background: #f5f7fa;
  }
`;

export const row = css`
  cursor: pointer;
  &:hover {
    background: #f1f1f1;
  }
`;

export const pagination = css`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;

  button {
    padding: 6px 12px;
    border: 1px solid #ccc;
    background: white;
    border-radius: 6px;
    cursor: pointer;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:hover:not(:disabled) {
      background: #f3f3f3;
    }
  }
`;

export const pageNumber = (active) => css`
  background: ${active ? "#1565c0" : "white"};
  color: ${active ? "white" : "black"};
  border-color: ${active ? "#1565c0" : "#ccc"};
`;
