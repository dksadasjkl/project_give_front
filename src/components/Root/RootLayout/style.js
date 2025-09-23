import { css } from "@emotion/react";

export const background = css`
    position: fixed;
    top: 0;
    left: 0;
    z-index: -99;
    width: 100%;
    height: 100vh;
    background-color: white;
    overflow-x: hidden;
`;

export const layout = css`
    box-sizing: border-box;
    position: relative;
    width: 100%;
    height: 100%;
    background-color: transparent;
`;