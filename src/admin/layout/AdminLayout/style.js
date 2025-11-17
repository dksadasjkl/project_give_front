import { css } from "@emotion/react";

export const container = css`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background: #f5f6fa;
`;

export const content = css`
  margin-left: 240px; /* Sidebar 너비 */
  padding: 32px 40px;
  width: calc(100% - 240px);
  min-height: 100vh;
`;