import { css } from "@emotion/react";

export const container = css`
  padding: 20px;
`;

export const title = css`
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const table = css`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border-bottom: 1px solid #ddd;
    padding: 10px;
    text-align: center;
  }

  th {
    background: #f5f5f5;
    font-weight: 600;
  }

  tr:hover {
    background: #fafafa;
  }
`;

/* 🔥 제목 클릭 스타일 */
export const titleClickable = css`
  color: #1976d2;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;

/* 🔥 미답변 강조 */
export const needAnswerRow = css`
  background: #fff6f3;
`;

export const answered = css`
  color: #2e7d32;
  font-weight: bold;
`;

export const pending = css`
  color: #d32f2f;
  font-weight: bold;
`;

export const detailBtn = css`
  padding: 6px 12px;
  background: #1976d2;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #125a9c;
  }
`;

export const pagination = css`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    padding: 6px 12px;
    margin: 0 8px;
  }
`;
