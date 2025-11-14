import { css } from "@emotion/react";

export const layout = css`
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0;
  gap: 20px;
`;

export const layoutContainer = css`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const container = css`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 12px;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
`;

export const selectContainer = css`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const inputGroup = css`
  display: flex;
  align-items: flex-end;
  gap: 5px;   /* 버튼과 input 사이 간격 최소화 */
`;

export const searchButton = css`
  height: 34px;
  padding: 0 12px;
  background: #4455ee;
  color: #fff;
  border-radius: 6px;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #3344cc;
  }
`;


export const selectLabel = css`
  font-size: 14px;
  font-weight: 600;
  color: #444;
`;

export const select = css`
  width: 150px;
  padding: 8px 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
`;

export const input = css`
  padding: 8px 10px;
  width: 250px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
`;

export const button = css`
  padding: 8px 12px;
  background: #4455ee;
  color: #fff;
  border-radius: 6px;
  cursor: pointer;
  border: none;

  &:hover {
    background: #3344cc;
  }
`;

export const loading = css`
  color: #555;
  margin-top: 10px;
`;

export const error = css`
  color: red;
  margin-top: 10px;
`;
/* 우측 리스트 전체 */
export const listContainer = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;              /* 간격 증가 */
  height: 810px;
  padding: 20px 16px;     /* 전체 padding 증가 */
  overflow-y: auto;
  border: 1px solid #e5e5e5;
  border-radius: 12px;
  background: #fafafa;    /* 은은한 배경 */
`;

/* 검색 결과 없음 */
export const empty = css`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 15px;
`;

/* 리스트 아이템 */
export const listItem = css`
  padding: 16px 14px;         /* 패딩 증가 */
  background: #fff;
  border: 1px solid #eee;
  border-radius: 10px;
  cursor: pointer;

  transition: all 0.15s ease-in-out;
  box-shadow: 0 1px 3px rgba(0,0,0,0.04);   /* 자연스러운 그림자 */

  &:hover {
    background: #f3f5ff;
    transform: translateY(-2px);          /* 카드형 hover 효과 */
    box-shadow: 0 4px 10px rgba(0,0,0,0.08);
  }
`;

/* 제목 */
export const listTitle = css`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 8px;
`;

/* 주소 */
export const listAddress = css`
  font-size: 13px;
  color: #666;
  margin-bottom: 6px;
`;

/* 카테고리 */
export const listMeta = css`
  display: flex;
  gap: 10px;
  font-size: 12px;
  color: #999;
`;

export const listCategory = css`
  color: #4455ee;
  background: #eef0ff;
  padding: 3px 8px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 12px;
`;
