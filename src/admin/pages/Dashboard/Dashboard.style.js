import { css } from "@emotion/react";

export const layout = css`
  max-width: 1320px;
  margin: 30px auto 60px;
  padding: 0 24px;
  background: #f3f4fb;
  min-height: calc(100vh - 80px);
`;

export const pageTitle = css`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 24px;
  color: #111827;
`;

export const loading = css`
  padding: 40px;
  font-size: 15px;
  color: #6b7280;
`;

export const error = css`
  padding: 40px;
  font-size: 15px;
  color: #ef4444;
`;

export const kpiGrid = css`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
  margin-bottom: 28px;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const chartBox = css`
  background: #ffffff;
  padding: 22px 24px;
  border-radius: 18px;
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.08);
  margin-bottom: 28px;
`;

export const sectionTitle = css`
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #111827;
`;

export const bottomGrid = css`
  display: grid;
  grid-template-columns: minmax(0, 1.6fr) minmax(0, 1fr);
  gap: 20px;
  align-items: flex-start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const rightColumn = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const cardBox = css`
  background: #ffffff;
  padding: 18px 20px;
  border-radius: 18px;
  box-shadow: 0 14px 35px rgba(15, 23, 42, 0.06);
`;

export const emptyText = css`
  font-size: 13px;
  color: #9ca3af;
`;

/* 최근 후원 테이블에 적용할 때 높이 제한 주고 스크롤 나오게 */
export const tableScrollable = css`
  max-height: 360px;
  overflow-y: auto;
`;