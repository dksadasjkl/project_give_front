import { css } from "@emotion/react";

export const sectionWrapper = css`
  margin: 48px 0;
`;

export const sectionTitle = css`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 24px;
`;

export const gridWrapper = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
