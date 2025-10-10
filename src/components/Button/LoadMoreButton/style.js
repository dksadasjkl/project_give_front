import { css } from "@emotion/react";

export const plusButton = css`
    box-sizing: border-box;
    display: flex;
    justify-content : center;
    align-items: center; 
    padding: 10px 45px;
    margin: 20px auto 0;
    border: 1px solid #d9d9d9;
    border-radius: 40px;
    font-size: 16px;
    color: #000;
    text-align: center;
    font-family: "Pretendard, sans-serif";
    background-color: #fff;
    cursor: pointer;

    @media (max-width: 480px) {
        width: 120px;
        height: 40px;
        font-size: 14px;
    }
`;