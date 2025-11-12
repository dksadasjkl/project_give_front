/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const container = css`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  font-family: "Pretendard";
`;

export const title = css`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 24px;
  font-weight: 700;
  color: #111;
  margin-bottom: 28px;
  font-family: "Pretendard", "NanumSquareWebFont", sans-serif;
`

export const loading = css`
  text-align: center;
  padding: 50px;
`;

export const empty = css`
  text-align: center;
  color: #777;
  padding: 40px;
`;

export const orderList = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const orderCard = css`
  border: 1px solid #ddd;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  padding: 18px 20px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.03);
`;

export const orderHeader = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  border-bottom: 1px solid #eee;
  padding-bottom: 8px;
  margin-bottom: 10px;
`;

export const orderBody = css`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const image = css`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
`;

export const info = css`
  flex: 1;
`;

export const name = css`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const price = css`
  color: #0078ff;
  font-weight: 600;
`;

export const actions = css`
  display: flex;
  justify-content: flex-end;
  margin-top: 5px;
  gap: 8px;
`;

export const confirmBtn = css`
  background: #03a94d;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;
  &:hover {
    background: #029b45;
  }
`;

export const detailBtn = css`
  background: #0078ff;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: #0061d6;
  }
`;

export const detailBox = css`
  margin-top: 15px;
  border-top: 1px dashed #ccc;
  padding-top: 15px;
  background: #fafafa;
  border-radius: 8px;
  padding-left: 10px;
  transition: all 0.3s ease;
`;

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

export const statusLabel = (color) => css`
  background: ${color}22;
  color: ${color};
  padding: 4px 10px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 14px;
`;

export const loginNotice = css`
  text-align: center;
  padding: 40px;
  font-size: 18px;
  color: #555;
`;
