import { css } from "@emotion/react";

export const container = css`
  width: 100%;
  margin: 40px auto;
  padding: 0 20px;
`;

export const title = css`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 24px;
  color: #111827;
`;

export const table = css`
  width: 100%;
  border-collapse: collapse;
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e5e7eb;

  th,
  td {
    padding: 12px 14px;
    border-bottom: 1px solid #e5e7eb;
    text-align: center;
    font-size: 14px;
  }

  th {
    background: #f3f4f6;
    font-weight: 700;
    color: #374151;
  }

  tr:hover td {
    background: #fafafa;
  }
`;

export const status = (state) => {
  let bg = "#e5e7eb";
  let color = "#374151";

  if (state === "SUCCESS") {
    bg = "#e8f7e9";
    color = "#1c7d36";
  } else if (state === "FAILED") {
    bg = "#fdeaea";
    color = "#c0392b";
  } else if (state === "PENDING") {
    bg = "#fff5d6";
    color = "#b37b00";
  }

  return css`
    padding: 6px 10px;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 600;
    background: ${bg};
    color: ${color};
  `;
};

export const detailBtn = css`
  padding: 8px 14px;
  background: #1565c0;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  border: none;

  &:hover {
    background: #0d47a1;
  }
`;

export const pagination = css`
  margin-top: 24px;
  display: flex;
  justify-content: center;
  gap: 12px;

  button {
    padding: 6px 12px;
    background: #ffffff;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;

    &:disabled {
      opacity: 0.45;
      cursor: not-allowed;
    }

    &:hover:not(:disabled) {
      background: #f3f4f3;
    }
  }

  span {
    display: flex;
    align-items: center;
    font-weight: 600;
    color: #374151;
  }
`;
