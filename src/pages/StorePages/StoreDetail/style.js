/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const container = css`
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: "Pretendard";
`;

export const loading = css`
  text-align: center;
  margin-top: 50px;
  font-size: 18px;
  color: #666;
`;

export const detailSection = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 30px;
`;

export const detailImageBox = (isDetailPage) => css`
  width: 80%;
  max-height: ${isDetailPage ? "none" : "800px"};
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.4s ease;
  & > img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

export const detailToggleBtn = css`
  width: 80%;
  height: 60px;
  font-size: 16px;
  font-weight: bold;
  color: #222;
  border: 1.5px solid #222;
  border-radius: 8px;
  margin-top: 15px;
  background-color: #fff;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: #f9f9f9;
  }
`;

export const actionBar = css`
  position: sticky;
  top: 80px; /* RootHeader 높이만큼 */
  z-index: 50;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #eee;
  gap: 30px;
  padding: 14px 0;
  transition: box-shadow 0.2s ease;
  box-shadow: 0 2px 4px rgba(0,0,0,0.03);
`;


export const tabButton = css`
  font-size: 16px;
  font-weight: 500;
  color: #555;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 6px;
  transition: 0.2s;

  &:hover {
    background: #f5f5f5;
  }
`;

export const activeTab = css`
  color: #007bff;
  font-weight: 700;
  border-bottom: 2px solid #007bff;
`;
