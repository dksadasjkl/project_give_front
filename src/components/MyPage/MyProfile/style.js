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
    padding: 20px;
    color: #222;
    font-size: 18px;
`;

export const title = css`
    font-size: 22px;
    margin-bottom: 20px;
    font-weight: 700;
`;

export const subTitle = css`
    margin-bottom: 20px;
    font-weight: 700;
`;

export const profileBox = css`
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border: 1px solid #e3e8ec;     
    border-radius: 12px;
    padding: 40px;
    row-gap: 10px;
    background-color: #ffffff;
    box-shadow: 0 2px 6px rgba(0,0,0,0.04);
`;
