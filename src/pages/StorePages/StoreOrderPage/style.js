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

/* 공통 로딩 / 빈 상태 */
export const loading = css`
  text-align: center;
  padding: 50px;
  font-size: 18px;
  color: #666;
`;

export const empty = css`
  text-align: center;
  padding: 40px;
  font-size: 16px;
  color: #777;
`;

export const loginNotice = css`
  text-align: center;
  padding: 40px;
  font-size: 18px;
  color: #555;
`;

/* 주문 카드 */
export const orderCard = css`
  border: 1px solid #d7e2eb;
  border-radius: 14px;
  background: #fff;
  padding: 18px 20px;
  margin-bottom: 20px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.03);
`;

/* 주문 상단 */
export const orderHeader = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  border-bottom: 1px solid #eee;
  padding-bottom: 8px;
  margin-bottom: 12px;
`;

/* 주문 내용 */
export const orderBody = css`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const image = css`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid #dcdcdc;
  cursor: pointer;
`;

export const info = css`
  flex: 1;
`;

export const name = css`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 6px;
`;

export const price = css`
  font-size: 16px;
  color: #0078ff;
  font-weight: 700;
  margin-bottom: 6px;
`;

/* 주문 상태 라벨 */
export const statusLabel = (color) => css`
  background: ${color}22;
  color: ${color};
  padding: 4px 10px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 14px;
`;

/* 버튼 영역 */
export const actions = css`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 10px;
`;

/* 구매확정 버튼 (통일된 녹색) */
export const confirmBtn = css`
  background: #03a94d;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 6px 12px;
  font-size: 14px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.2s;

  &:hover {
    background: #029b45;
  }
`;

/* 상세보기 버튼 (통일된 파랑) */
export const detailBtn = css`
  background: #0078ff;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 6px 12px;
  font-size: 14px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #0061d6;
  }
`;

/* 상세 정보 박스 */
export const detailBox = css`
  margin-top: 15px;
  border-top: 1px dashed #ccc;
  padding-top: 15px;
  background: #fafafa;
  border-radius: 10px;
  padding-left: 10px;
`;

/* 상세 정보 섹션 */
export const detailSection = css`
  padding: 10px 0;

  h4 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 6px;
  }

  ul {
    margin-left: 10px;
  }

  li {
    margin-bottom: 3px;
    font-size: 14px;
    color: #444;
  }
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