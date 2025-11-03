import { css } from "@emotion/react";

export const layout = css`
  width: 1200px;
  margin: 0 auto;
  padding: 40px;
  font-family: "Pretendard";
`;

// ✅ 카테고리 영역
export const categoryBar = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 35px;
`;

export const category = (selectedCategory, categoryId) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  cursor: pointer;
  padding: 10px;
  border-radius: 12px;
  background-color: ${selectedCategory === categoryId ? "#eef5ff" : "#fff"};
  box-shadow: ${selectedCategory === categoryId
    ? "0 0 8px rgba(78, 138, 255, 0.4)"
    : "0 1px 4px rgba(0,0,0,0.1)"};
  transition: all 0.2s ease;
  font-size: 11px;
  &:hover {
    transform: translateY(-3px);
  }
`;

export const categoryImage = css`
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 6px;
`;

// ✅ 헤더 바
export const headerBar = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

// ✅ 상품 카드 그리드
export const cardGrid = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;
`;

// ✅ 더보기 버튼
export const Buttonlayout = css`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export const plusButton = css`
  width: 100%;
  padding: 10px 28px;
  border: 1px solid rgba(0, 0, 0, 0.07);
  border-radius: 8px;
  background-color: #f6f6f6;
  color: #202020;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #e8e8e8;
  }
`;
