import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
`;

export const userDetails = css`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    height: 100%;
    padding: 0px 80px 80px 40px;
    color: #202020;
    font-size: 18px;
    font-family: "NanumSquareWebFont, dotum, Sans-serif";
`;

export const title = css`
    font-size: 22px;
    margin-bottom: 20px;
    font-weight: 700;
`;

export const profileBox = css`
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #d7e2eb;
    border-radius: 15px;
    padding: 40px;
    row-gap: 10px;
    background-color: #ffffff;
`;

export const subTitle = css`
    margin-bottom: 20px;
    font-weight: 700;
`;
