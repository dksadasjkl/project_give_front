import { css } from "@emotion/react";


export const historyLayout = css`
    width: 100%;
    max-width: 1200px;
    margin-top: 20px;
    font-family: "Pretendard, sans-serif";
`;


export const totalCount = css`
    width: 70%;
    padding: 24px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #e5e5e5;
    border-radius: 10px;
    font-size: 18px;
    background-color: #fcfcfc;
    text-align: center;
    color: #1c1c1c;

    & > span { 
        margin-left: 5px;
        font-weight: 500;
        color: #03a94d;
    }
`;

export const historyItem = css`
    width: 70%;
    margin-top: 10px;
    padding: 24px 0;
    border-bottom: 1px solid #e5e5e5;
    font-size: 16px;
`;

export const contributionDate = css`
    color: #737373;
`;

export const contributorInfo = css`
    color: #1c1c1c;

    span {
        margin-left: 5px;
        font-weight: 500;
        color: #03a94d;
    }
`;


export const emptyMessage = css`
    margin-top: 20px;
    color: #737373;
`;

export const button = css`
    width: 70%;
`;
