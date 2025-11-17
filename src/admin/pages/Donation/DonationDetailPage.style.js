import { css } from "@emotion/react";

export const container = css`
  width: 100%;
`;

export const title = css`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 30px;
`;

export const detailBox = css`
  display: flex;
  gap: 25px;
  margin-bottom: 30px;
`;

export const thumbnail = css`
  width: 260px;
  height: 260px;
  border-radius: 8px;
  object-fit: cover;
`;

export const infoBox = css`
  display: flex;
  flex-direction: column;
  font-size: 16px;

  p {
    margin: 6px 0;
  }
`;

export const projectTitle = css`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const section = css`
  margin-top: 20px;
`;

export const description = css`
  white-space: pre-wrap;
  background: #fafafa;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #eee;
`;

export const editBtn = css`
  margin: 20px 5px 0;
  padding: 10px 16px;
  background: #333;
  color: #fff;
  border-radius: 6px;
  cursor: pointer;
  border: none;
  font-size: 15px;
  font-weight: 600;

  &:hover {
    background: #555;
  }
`;

export const detailManageBtn = css`
  margin-top: 16px;
  background: #4f46e5;
  color: white;
  padding: 10px 18px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 15px;
  transition: 0.15s ease;

  &:hover {
    background: #4338ca;
  }
`;
