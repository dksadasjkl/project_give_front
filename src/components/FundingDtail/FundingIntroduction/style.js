import { css } from "@emotion/react";

export const content = css` 
    padding-top: 40px;
    @media (max-width: 768px) {
        padding-top: 24px;
    }
`;

export const subtitle = css` 
    font-weight: 800;
    font-size: 23px;
    font-family: "NanumSquareNeo", "sans-serif";
    letter-spacing: -0.5px;

    @media (max-width: 1024px) {
        font-size: 20px;
    }
    @media (max-width: 768px) { 
        font-size: 18px;
    }
`;

export const text = css` 
    width: 1100px;
    margin-top: 20px;
    font-size: 18px;
    color: #424242;
    font-family: "Pretendard", "sans-serif";
    letter-spacing: -0.5px;

    @media (max-width: 1200px) {
        width: 90%;
    }

    @media (max-width: 768px) {
        width: 95%;
        font-size: 16px;
        line-height: 1.6;
    }

    @media (max-width: 480px) { 
        font-size: 15px;
    }
`;

export const imgBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1000px;
    height: auto; 
    margin-top: 20px;
    cursor: pointer;

    & > img {
        width: 100%;
        height: auto; 
        border-radius: 10px;
    }

    @media (max-width: 1200px) { 
        width: 90%;
    }

    @media (max-width: 768px) { 
        width: 95%;
    }
`;
