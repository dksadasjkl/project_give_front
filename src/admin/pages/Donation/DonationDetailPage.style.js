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
`;

export const projectTitle = css`
  font-size: 22px;
  font-weight: 700;
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
