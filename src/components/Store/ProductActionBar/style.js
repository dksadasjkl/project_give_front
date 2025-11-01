import { css } from "@emotion/react";

export const container = css`
  font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo",
    Roboto, "Noto Sans CJK KR", Arial, "맑은 고딕", "Malgun Gothic", sans-serif;
`;

export const quantityContainer = css`
  padding: 15px 14px 15px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.28);
  border-bottom: 1px solid rgba(0, 0, 0, 0.28);
`;


export const quantityBox = css`
  max-width: 105px;
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;

  button:first-of-type  {
    width: 30px;
    height: 30px;
    border: none; /* 모든 테두리 없앰 */
    border-right: 1px solid #ddd; /* ✅ 오른쪽만 다시 추가 */
    border-radius: 6px;
    background: #fff;
    font-size: 18px;
    cursor: pointer;

    transition: 0.2s;

    &:hover {
      background: #f3f3f3;
    }
  }

    button:last-of-type {
    width: 30px;
    height: 30px;
    border: none; /* 모든 테두리 없앰 */
    border-left: 1px solid #ddd; /* ✅ 오른쪽만 다시 추가 */
    border-radius: 6px;
    background: #fff;
    font-size: 18px;
    cursor: pointer;

    transition: 0.2s;

    &:hover {
      background: #f3f3f3;
    }
  }

  span {
    min-width: 25px;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
  }
`;


export const actions = css`
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const baseBtn = css`
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
`;

export const wishlistBtn = css`
  ${baseBtn};
  background: #fff0f0;
  color: #e84118;
  &:hover {
    background: #ffe3e3;
  }
`;

export const cartBtn = css`
  ${baseBtn};
  background: #f1f3ff;
  color: #2e4bff;
  &:hover {
    background: #e0e4ff;
  }
`;

export const orderBtn = css`
  ${baseBtn};
  background: #007bff;
  color: white;
  &:hover {
    background: #0069d9;
  }
`;

export const previewBox = css`
  margin-top: 18px;
  padding: 14px 16px;
  background: #fafafa;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const previewTitle = css`
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 8px;
  color: #111;
`;

export const previewItem = css`
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #333;
`;

export const previewName = css`
  flex: 1;
  font-weight: 500;
  color: #222;
`;

export const previewCount = css`
  width: 50px;
  text-align: center;
  color: #666;
`;

export const previewPrice = css`
  width: 80px;
  text-align: right;
  font-weight: 700;
  color: #111;
`;

export const previewHeader = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const closeBtn = css`
  background: none;
  border: none;
  font-size: 16px;
  color: #777;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: #000;
    transform: scale(1.1);
  }
`;

export const shippingInfo = css`
  margin-top: 8px;
  font-size: 14px;
  color: #555;
  line-height: 1.4;
`;

export const totalBox = css`
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const totalPrice = css`
  font-weight: 600;
  color: #0078ff;
  font-size: 16px;
`;
