/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const container = css`
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
`;

export const title = css`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 30px;
`;

export const table = css`
  width: 100%;
  border-collapse: collapse;
  background: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);

  th {
    background: #f7f7f7;
    padding: 15px;
    border-bottom: 1px solid #e3e3e3;
    font-size: 15px;
    font-weight: 600;
  }

  td {
    padding: 15px;
    text-align: center;
    border-bottom: 1px solid #efefef;
    font-size: 14px;
  }

  tr:hover td {
    background: #fafafa;
  }
`;

export const detailBtn = css`
  padding: 6px 12px;
  background: #4a6bff;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;

  &:hover {
    background: #3b56d4;
  }
`;

// 결제 상태별 컬러 태그
export const status = (state) => {
  let bg = "#ddd";
  let color = "#333";

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
    padding: 5px 10px;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 600;
    background: ${bg};
    color: ${color};
  `;
};

export const pagination = css`
  margin-top: 24px;
  display: flex;
  justify-content: center;
  gap: 8px;
`;

export const pageBtn = css`
  padding: 6px 12px;
  border: 1px solid #ccc;
  background: #fff;
  border-radius: 6px;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background: #f5f5f5;
  }
`;

export const pageNumber = (active) => css`
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  border: 1px solid ${active ? "#1565c0" : "#ccc"};
  background: ${active ? "#1565c0" : "#fff"};
  color: ${active ? "#fff" : "#000"};

  &:hover {
    background: ${active ? "#0d47a1" : "#f3f3f3"};
  }
`;