import { css } from "@emotion/react";


export const background = css`
    width: 100%;
    min-height: 100vh;  /* 화면 높이 기준으로 스크롤 확보 */
    background-color: white;
`;

export const layout = css`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: white;
    padding-top: 80px; /* RootHeader 높이만큼 */
    overflow-x: hidden; /* 가로 스크롤만 막기 */
`;