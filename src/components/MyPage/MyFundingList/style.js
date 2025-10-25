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
    justify-content: center; /* 남는 공간 중앙 정렬 */

    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`;
