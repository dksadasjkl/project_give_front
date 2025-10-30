/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const container = css`
  max-width: 1000px;
  margin: 40px auto;
  font-family: "Pretendard";
`;

export const title = css`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
`;

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
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
  padding: 15px;
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
  margin-top: 10px;
`;

export const detailBtn = css`
  background: #0078ff;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
`;

export const detailBox = css`
  margin-top: 15px;
  border-top: 1px dashed #ccc;
  padding-top: 10px;
  background: #fafafa;
  border-radius: 8px;

  h4 {
    margin-top: 10px;
    font-size: 16px;
  }

  ul {
    margin: 5px 0 10px 10px;
  }

  li {
    margin-bottom: 4px;
  }
`;

export const loginNotice = css`
  text-align: center;
  padding: 40px;
  font-size: 18px;
`;
