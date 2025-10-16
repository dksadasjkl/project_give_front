import { css } from "@emotion/react";

export const layout = css`
  display: flex;
  max-width: 1200px; /* 최대 폭 */
  margin: 50px auto 0; /* 화면 가운데 정렬, 위쪽 여백 50px */
  width: 100%; /* 화면 좁아지면 반응 */
  height: 100%;

  @media (max-width: 1200px) {
    width: 95%;
  }

  @media (max-width: 768px) {
    flex-direction: column; /* 모바일이면 세로 배치 */
    width: 90%;
  }
`;

export const sidebar = css`
  width: 220px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #ddd;
  }
`;

export const content = css`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
`;