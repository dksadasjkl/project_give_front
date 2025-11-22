import { css } from '@emotion/react';

export const container = css`
  padding: 20px;
`;

export const title = css`
  font-size: 22px;
  margin-bottom: 20px;
  font-weight: 700;
  color: #222;
`;

/* ===============================
    배너 (프로필 / 댓글 UI와 동일)
================================ */
export const banner = css`
  display: flex;
  justify-content: center;
  width: 100%;
  border: 1px solid #e3e8ec;
  border-radius: 12px;
  padding: 18px 0;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0,0,0,0.04);
  margin-bottom: 20px;

  div {
    flex: 1;
    text-align: center;
    font-weight: 600;
    font-size: 15px;
    color: #222;
  }

  div:not(:last-child) {
    border-right: 1px solid #e3e8ec;
  }
`;

/* ===============================
    기부 카드 그리드
================================ */
export const donationCard = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  justify-content: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

/* ===============================
    페이지네이션 (통일 버튼 UI)
================================ */
export const pagination = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  margin-top: 30px;

  button {
    padding: 6px 12px;
    border: 1px solid #e3e8ec;
    background: #fff;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    color: #222;
    transition: all 0.2s ease;

    &:hover {
      background: #03a94d;
      color: #fff;
    }

    &:disabled {
      background: #f2f2f2;
      color: #aaa;
      cursor: not-allowed;
    }
  }
`;

export const pageBtn = css`
  border: 1px solid #e3e8ec;
  background: #fff;

  &:hover {
    background: #03a94d;
    color: #fff;
  }
`;

export const pageBtnActive = css`
  background: #03a94d !important;
  color: #fff !important;
  border-color: #03a94d !important;
  font-weight: 700;
  cursor: default;

  &:hover {
    background: #03a94d;
    color: #fff;
  }
`;
