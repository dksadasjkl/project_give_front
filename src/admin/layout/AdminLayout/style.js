import { css } from "@emotion/react";

export const container = css`
  display: flex;
  width: 100%;
  min-height: 100vh;
`;

export const content = css`
  margin-left: 220px; /* Sidebar width */
  padding: 30px;
  width: calc(100% - 220px);
  background: #f5f6fa;
`;
