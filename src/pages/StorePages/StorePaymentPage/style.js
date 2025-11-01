/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const container = css`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  font-family: "Pretendard";
`;

export const title = css`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 30px;
  text-align: center;
`;

export const productBox = css`
  display: flex;
  gap: 20px;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 20px;

  img {
    width: 150px;
    height: 150px;
    border-radius: 8px;
    object-fit: cover;
  }
`;

export const productInfo = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;

  h3 {
    font-size: 18px;
    font-weight: 600;
  }
`;

export const price = css`
  margin-top: 10px;
  color: #007bff;
  font-weight: 600;
`;

export const paymentBox = css`
  margin-top: 40px;
  border-top: 1px solid #eee;
  padding-top: 30px;

  h4 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
  }
`;

export const methodBox = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

export const kakaoMethod = css`
  background: #ffe812;
  color: #3a1d1d;
  font-weight: 600;
  padding: 10px 18px;
  border-radius: 8px;
`;

export const payBtn = css`
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 8px;
  background: #f6c000;
  color: #000;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #ffd700;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

export const loading = css`
  text-align: center;
  margin-top: 100px;
  color: #888;
`;

export const postcodeRow = css`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 8px;
`;

export const postcodeBtn = css`
  padding: 10px 14px;
  background: #0078ff;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
`;

export const postcodeModal = css`
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
`;

export const shippingBox = css`
  margin-top: 40px;
  border-top: 1px solid #eee;
  padding-top: 30px;

  h4 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 15px;
  }
`;

export const input = css`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 15px;
  margin-bottom: 10px;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #0078ff;
    box-shadow: 0 0 0 2px rgba(0, 120, 255, 0.1);
  }

  &::placeholder {
    color: #aaa;
  }
`;

export const inputSmall = css`
  width: 120px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 15px;
  background-color: #fafafa;

  &:focus {
    outline: none;
    border-color: #0078ff;
  }
`;


export const postcodeOverlay = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const postcodePopup = css`
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  width: 480px;
  height: 450px;
  position: relative;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
`;

export const closePostcodeBtn = css`
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: #0078ff;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 6px 10px;
  cursor: pointer;
  font-size: 14px;
`;
