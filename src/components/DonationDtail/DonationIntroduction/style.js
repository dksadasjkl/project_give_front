import { css } from "@emotion/react";

export const content = css` 
    padding: 40px 0 0;
`;


export const subtitle = css` 
    font-weight: 800;
    font-size: 23px;
    font-family: "NanumSquareNeo", "sans-serif";
    letter-spacing: -.5px;
`;

export const text = css` 
    margin-top: 20px;
    font-size: 18px;
    color: #424242;
    font-family: "Pretendard", "sans-serif";
    letter-spacing: -.5px;
`;

export const imgBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 700px;
    height: 420px;
    
    cursor: pointer;
    & > img {
        height: 100%;
        width: 100%;
        border-radius: 10px;
    }
`;

