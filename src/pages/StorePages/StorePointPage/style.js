/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const container = css`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  font-family: "Pretendard";
`;

export const title = css`
  font-size: 24px;
  font-weight: 700;
  color: #111;
  margin-bottom: 25px;
  font-family: "Pretendard", "NanumSquareWebFont", sans-serif;
`;

/* 공통 로딩 / empty */
export const loading = css`
  text-align: center;
  padding: 60px;
  font-size: 18px;
  color: #666;
`;

export const empty = css`
  text-align: center;
  color: #777;
  padding: 40px;
  font-size: 16px;
`;

export const loginNotice = css`
  text-align: center;
  padding: 40px;
  font-size: 18px;
  color: #555;
`;

/* 테이블 박스 */
export const tableWrapper = css`
  overflow-x: auto;
  border-radius: 12px;
  border: 1px solid #d7e2eb;
  background: #fff;
  margin-bottom: 20px;
`;

/* 테이블 */
export const table = css`
  width: 100%;
  border-collapse: collapse;
  text-align: center;

  th,
  td {
    padding: 14px 10px;
    border-bottom: 1px solid #eee;
    font-size: 15px;
  }

  th {
    background: #f5f7fa;
    font-weight: 600;
    color: #333;
  }
`;

/* 포인트 색상 */
export const plus = css`
  color: #0078ff;
  font-weight: 600;
`;

export const minus = css`
  color: #e74c3c;
  font-weight: 600;
`;

/* 페이지네이션 */
export const pagination = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  margin-top: 28px;

  button {
    padding: 6px 12px;
    border: 1px solid #e3e8ec;
    background: #ffffff;
    border-radius: 6px;
    cursor: pointer;
    color: #222;
    font-size: 14px;
    transition: all 0.2s ease;

    &:hover {
      background: #03a94d;
      color: #fff;
    }

    &:disabled {
      background: #f3f3f3;
      color: #aaa;
      cursor: not-allowed;
    }
  }
`;

export const pageBtn = css`
  border: 1px solid #e3e8ec;
  background: #ffffff;

  &:hover {
    background: #03a94d;
    color: #fff;
  }
`;

export const pageBtnActive = css`
  background: #03a94d !important;
  color: #fff !important;
  border-color: #03a94d !important;
  font-weight: 700;
  cursor: default;

  &:hover {
    background: #03a94d;
    color: #fff;
  }
`;