import { css } from "@emotion/react";

export const donationTabs = css` 
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    background-color: #fff;
    font-family: "Pretendard", "sans-serif";
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    color: #202020; 

    margin-left: 50%;
    transform: translateX(-50%);
`;

export const tabIntro = css`
    width: 130px;
    position: relative;
    line-height: 60px;
    text-align: center;

    &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px; 
        background-color: #202020;
    }
`;

export const tabDonate = css` 
    width: 290px;
    line-height: 60px;
    border-radius: 10px; 
    background-color: #71a0f8ff;
    color: #fff;
    cursor: pointer;
`;