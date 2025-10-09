import { css } from "@emotion/react";

export const footer = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 250px;
    border-top: 1px solid #dbdbdb;
    padding: 20px;
    width: 100%;
    min-height: 200px;
    flex-wrap: wrap;

    background-color: #fff;

    & a {
        text-decoration: none;
        color: black;
        font-weight: 600;
        transition: all 0.3s;

        &:hover {
            color: rgba(138, 248, 65, 1);
        }
    }

    @media (max-width: 1024px) {
        gap: 100px;
        padding: 16px;
        min-height: 160px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 40px;
        padding: 20px 0;
        text-align: center;
    }

    @media (max-width: 480px) {
        gap: 20px;
        font-size: 14px;
    }
`;

export const spanContent = css`
    font-weight: 600;
    @media (max-width: 768px) { 
        font-size: 14px;
    }
`;

export const githubContent = css`
    font-weight: 600;
    @media (max-width: 768px) { 
        font-size: 14px;
    }
`;