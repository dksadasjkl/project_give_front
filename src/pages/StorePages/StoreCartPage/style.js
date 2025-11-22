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

export const loading = css`
  text-align: center;
  padding: 50px;
  font-size: 18px;
  color: #666;
`;

export const empty = css`
  text-align: center;
  color: #777;
  padding: 40px;
  font-size: 16px;
`;

export const cartItem = css`
  display: flex;
  gap: 16px;
  padding: 18px;
  border: 1px solid #d7e2eb;
  border-radius: 12px;
  background: #fff;
  margin-bottom: 14px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.04);
  transition: 0.25s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  }
`;

export const image = css`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid #ececec;
`;

export const info = css`
  flex: 1;

  h3 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 6px;
  }

  p {
    margin-bottom: 8px;
    color: #333;
    font-weight: 500;
  }
`;

export const quantityBox = css`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;

  button {
    width: 30px;
    height: 30px;
    border: 1px solid #d7e2eb;
    background: #f5f7fa;
    border-radius: 8px;
    cursor: pointer;
    font-size: 18px;
    transition: all 0.2s;

    &:hover {
      background: #e8f0f8;
    }
  }

  span {
    font-size: 16px;
    font-weight: 600;
  }
`;

export const deleteBtn = css`
  background: #fde7e7;
  color: #e33;
  border: 1px solid #f5bcbc;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: 0.2s;

  &:hover {
    background: #fbd3d3;
  }
`;


export const summary = css`
  margin-top: 30px;
  padding: 20px;
  border: 1px solid #d7e2eb;
  border-radius: 15px;
  background: #ffffff;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.04);
  text-align: center;
`;

export const total = css`
  font-size: 22px;
  font-weight: 700;
  margin: 12px 0;
  color: #0078ff;
`;

export const orderBtn = css`
  background: #0078ff;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 12px 28px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: 0.2s;

  &:hover {
    background: #0061d6;
  }
`;

export const loginNotice = css`
  text-align: center;
  padding: 50px;
  font-size: 18px;
  color: #555;
`;

/** 장바구니 전체 삭제 버튼 감싸는 박스 */
export const clearBox = css`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 12px;
`;

/** 전체 삭제 버튼 */
export const clearBtn = css`
  background: #ffecec;
  color: #d64545;
  border: 1px solid #f4b3b3;
  padding: 8px 14px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  transition: 0.2s;

  &:hover {
    background: #ffdede;
  }
`;