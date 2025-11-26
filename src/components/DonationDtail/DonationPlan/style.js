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

export const flexWrapper = css`
    margin-top: 20px;
    display: flex;
    gap: 30px; 
`;

export const tableWrapper = css`
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


export const organizationBox = css`
    width: 20%; 
    height: 80px;
    padding: 11px 10px 12px 0px;
    border: 1px solid #e5e5e5;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px; /* 박스 자체 둥글게 */

    & > div {
        font-size: 16px;
        font-weight: 600;
        text-align: center;
        padding-left: 11px
    }

`;

export const imgBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 60px;    

    & > img {
        height: 100%;
        width: 100%;
        border: 1px solid rgba(0, 0, 0, .05);
        border-radius: 50%;
    }
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

