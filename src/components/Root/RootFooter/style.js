import { css } from "@emotion/react";

export const footer = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 200px;
    border-top: 1px solid #dbdbdb;
    padding: 20px;
    width: 100%;
    min-height: 200px;
    flex-wrap: wrap;

    & a {
        text-decoration: none;
        color: black;
        font-weight: 600;
        transition: all 0.3s;

        &:hover {
            color: rgba(138, 248, 65, 1);
        }
    }

`;

export const spanContent = css`
    font-weight: 600;
    
`;

export const githubContent = css`
    font-weight: 600;
`;