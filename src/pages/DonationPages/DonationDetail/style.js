import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 16px; /* 모바일 여백 */
`

export const tapLayout = css`
    margin-top: 40px;
    padding: 40px 0 100px;
    border-top: 1px solid #e5e5e5;
`

export const tapBox = css`
    display: flex;
    font-size: 23px;
    font-family: "Pretendard, sans-serif";
    color: #a3a3a3;
    text-align: center;

    & > div:nth-child(2) {
      margin-left: 16px;
      padding-left: 16px;
    }

`

export const taps = css`
    cursor: pointer;
`;

export const active = css`
    color: #000;
    font-weight: 600;
`;

export const tabContent = css`

`;