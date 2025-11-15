import { css } from "@emotion/react";

export const layout = css`
  padding: 30px;
  background: #f5f6fa;
  min-height: 100vh;
`;

export const pageTitle = css`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 25px;
`;

export const kpiGrid = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 40px;
`;

export const chartBox = css`
  background: #fff;
  padding: 20px;
  border-radius: 14px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  margin-bottom: 40px;
`;

export const bottomGrid = css`
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 20px;
`;

export const recentProjectList = css`
  background: #fff;
  padding: 20px;
  border-radius: 14px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
`;

export const sectionTitle = css`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 15px;
`;
