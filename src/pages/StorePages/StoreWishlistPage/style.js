/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const container = css`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const title = css`
  font-size: 22px;
  margin-bottom: 20px;
  font-weight: 700;
  color: #222;
`;

export const loading = css`
  text-align: center;
  padding: 50px;
  font-size: 17px;
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
  padding: 50px;
  font-size: 18px;
  color: #555;
`;

export const grid = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 22px;
`;

export const card = css`
  display: flex;
  flex-direction: column;
  border: 1px solid #e3e8ec;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0,0,0,0.04);
  overflow: hidden;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
  }
`;

/* 이미지 */
export const imageBox = css`
  width: 100%;
  height: 220px;
  overflow: hidden;
  border-bottom: 1px solid #f1f1f1;
`;

export const image = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${card}:hover & {
    transform: scale(1.05);
  }
`;

/* 정보 영역 */
export const info = css`
  padding: 14px 14px 18px;
  text-align: center;

  h3 {
    font-size: 16px;
    font-weight: 600;
    color: #222;
    margin-bottom: 6px;
    line-height: 1.4;
  }
`;

export const price = css`
  color: #03a94d;
  font-weight: 700;
  font-size: 15px;
  margin-bottom: 5px;
`;

/* 삭제 버튼 */
export const removeBtn = css`
  margin-top: 5px;
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  background: #ff5b5b;
  color: white;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #e04848;
  }
`;

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
