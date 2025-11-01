import { css } from "@emotion/react";

export const container = css`
  display: flex;
  align-items: stretch; 
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", Roboto,
    "Noto Sans CJK KR", Arial, "맑은 고딕", "Malgun Gothic", sans-serif;
  overflow: hidden;
`;

export const imageBox = css`
  width: 480px;
  height: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end; 
  gap: 12px;
  padding-bottom: 12px;
`;

export const imageWrapper = css`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

export const infoBox = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px 24px;
  border-left: 1px solid #e5e5e5;
  gap: 6px;
`;

export const title = css`
  font-size: 24px;
  font-weight: 700;
  color: #111;
  margin-bottom: 4px;
`;

/* 🔥 할인 + 정가 + 판매가 한 줄 */
export const priceRow = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const discount = css`
  color: #d20022;
  font-weight: 600;
  font-size: 18px;
`;

export const priceGroup = css`
  display: flex;
  align-items: baseline;
  gap: 8px;
`;

export const originalPrice = css`
  text-decoration: line-through;
  color: #999;
  font-size: 15px;
`;

export const price = css`
  font-size: 22px;
  font-weight: 700;
  color: #d20022;
`;

export const desc = css`
  margin-top: 8px;
  font-size: 15px;
  color: #444;
  line-height: 1.5;
`;

/* 🧾 재고/등록일 같은 줄 */
export const metaRow = css`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #666;
`;

export const purchaseSection = css`
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const quantityBox = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  & > button {
    width: 36px;
    height: 36px;
    background: #f9f9f9;
    font-size: 18px;
    font-weight: 600;
    color: #222;
    border-radius: 6px;
    cursor: pointer;
  }

  & > span {
    min-width: 50px;
    text-align: center;
    font-weight: 600;
  }
`;

export const totalBox = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  padding: 8px 2px;
  border-bottom: 1px solid #eee;
`;

export const actionButtons = css`
  display: flex;
  gap: 10px;
`;

/* ✅ 평점 줄 */
export const ratingRow = css`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 8px;
  font-size: 15px;
  cursor: pointer;
  user-select: none;

  &:hover {
    opacity: 0.85;
  }
`;

export const star = css`
  color: #ffcc0092;
  font-size: 18px;
`;

export const score = css`
  font-weight: 700; 
  color: #111;
`;

export const grayText = css`
  color: #777;
  font-size: 14px;
`;

export const reviewLink = css`
  margin-left: 6px;
  font-size: 14px;
  color: #0078ff;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;

export const shippingInfo = css`
  margin-top: 12px;
  padding: 10px;
  background: #f9fafb;
  border-radius: 8px;
  font-size: 14px;
  color: #333;
  line-height: 1.5;

  p {
    margin: 0;
  }
`;
