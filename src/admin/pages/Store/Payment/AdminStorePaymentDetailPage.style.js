import { css } from "@emotion/react";

export const container = css`
  width: 100%;
  max-width: 900px;
  margin: 40px auto;
  padding: 20px;
`;

export const title = css`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const section = css`
  margin-bottom: 40px;
  padding: 20px;
  border-radius: 10px;
  background: #fafafa;
  border: 1px solid #eee;
`;

export const sectionTitle = css`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const infoRow = css`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;

  span {
    font-weight: 600;
    color: #333;
  }

  p {
    margin: 0;
    color: #555;
    text-align: right;
  }
`;
