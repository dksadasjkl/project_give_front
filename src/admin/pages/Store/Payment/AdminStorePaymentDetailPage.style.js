import { css } from "@emotion/react";

export const container = css`
  width: 100%;
  max-width: 900px;
  margin: 40px auto;
  padding: 24px 30px;
`;

export const title = css`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 30px;
`;

export const section = css`
  margin-bottom: 40px;
  padding: 22px 24px;
  border-radius: 14px;
  background: #fafafa;
  border: 1px solid #e5e7eb;
`;

export const sectionTitle = css`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 18px;
`;

export const infoRow = css`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid #e5e7eb;

  span {
    font-weight: 600;
    color: #374151;
  }

  p {
    margin: 0;
    color: #4b5563;
    text-align: right;
  }
`;
