import { css } from "@emotion/react";

export const layout = css`
  margin: 32px auto 56px;
  padding: 0 24px 32px;
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
  padding: 20px 22px;
  border-radius: 18px;
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
  margin-bottom: 26px;
  border: 1px solid #e5e7eb;
`;

export const sectionTitle = css`
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 14px;
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
  box-shadow: 0 10px 28px rgba(15, 23, 42, 0.06);
  border: 1px solid #e5e7eb;
`;

export const emptyText = css`
  font-size: 13px;
  color: #9ca3af;
`;

// 필요 시 테이블에 적용 가능 (지금 구조는 그대로 둠)
export const tableScrollable = css`
  max-height: 360px;
  overflow-y: auto;
`;
