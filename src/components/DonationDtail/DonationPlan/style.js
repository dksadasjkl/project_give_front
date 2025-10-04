import { css } from "@emotion/react";

export const layout = css`
    padding-top: 40px;

`;

export const title = css`
    font-size: 23px;
    font-family: "Pretendard", "sans-serif";
    font-weight: 700;
    color: #202020;
`;

export const tableWrapper = css`
    margin-top: 20px;
    width: 40%;
    border: 1px solid #e5e5e5;
    border-radius: 10px;
`;

export const rowBox = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 16px;
    border-bottom: 1px solid #e5e5e5;;

    &:last-child {
        border-bottom: none;
    }
`;

export const label = css`
    font-size: 16px;
    font-weight: 600;
    color: #737373;
`;

export const value = css`
    font-size: 16px;
    color: #1c1c1c;
`;

export const amountBox = css`
    padding-top: 6px;
    display: flex;
    align-items: center;
`;

export const donationSection = css`
    padding-top: 6px;
    display: flex;
    align-items: center;
`;



export const noticeBox = css`
    display: flex;
    margin-top: 20px;
    font-size: 16px;
    color: #202020;
`;


export const noticeIcon = css`
    color: #03a94d;
    font-size: 24px;
    margin-right: 4px;
`;

export const noticeTitle = css`
    font-weight: 500;
    color: #1c1c1c;
    
`;

export const noticeDesc = css`
    font-family: "Pretendard", "sans-serif";
    margin-top: 10px;
    color: #1c1c1c;
`;