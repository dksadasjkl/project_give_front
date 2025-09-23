import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    background-color: white;
`;

export const header = css`
    box-sizing: border-box;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
    z-index: 100;
    background-color: white;

      & div {
        margin: 30px; //임시
        text-decoration: none;
        color: black;
        font-weight: 600;
        transition: all 0.3s;
        cursor: pointer;

        &:hover {
            color: rgba(138, 248, 65, 1);
        }
    }
`;
