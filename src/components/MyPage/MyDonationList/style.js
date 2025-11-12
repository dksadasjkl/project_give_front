import { css } from '@emotion/react';

export const container = css`
  padding: 20px;
`;

export const title = css`
  font-size: 22px;
  margin-bottom: 20px;
  font-weight: 700;
`;

export const banner = css`
  background-color: #f5f7fa;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  text-align: center;
  h2 {
    margin-bottom: 10px;
  }
  p {
    margin: 5px 0;
    font-weight: bold;
  }
`;

export const donationCard = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  justify-content: center;
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const pagination = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  margin-top: 30px;

  button {
    padding: 6px 10px;
    border: 1px solid #ccc;
    background: #fff;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.2s;

    &:hover {
      background: #007bff;
      color: #fff;
    }

    &:disabled {
      background: #eee;
      color: #aaa;
      cursor: not-allowed;
    }
  }
`;
export const pageBtn = css`
  padding: 6px 10px;
  border: 1px solid #ccc;
  background: #fff;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s;

  &:hover {
    background: #0078ff;
    color: #fff;
  }
`;

export const pageBtnActive = css`
  background: #0078ff !important;   /* ✅ hover보다 강하게 지정 */
  color: #fff !important;
  border: 1px solid #0078ff !important;
  font-weight: 600;
  cursor: default;

  &:hover {
    background: #0078ff;
    color: #fff;
  }
`;
