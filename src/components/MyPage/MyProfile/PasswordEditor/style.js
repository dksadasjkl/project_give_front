import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
`;

export const passwordButton = css`
    box-sizing: border-box;
    border: 1px solid #0e004a24;
    border-radius: 5px;
    width: 160px;
    padding: 10px 20px;
    background-color: white;
    color: #222222;
    font-weight: 600;
    cursor: pointer;

    &:hover {
        font-weight: 700    ;
        background-color: #f7f7f7cc; 
    }
`;

export const passwordBox = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #d7e2eb;
    border-radius: 15px;
    padding: 40px;
    row-gap: 10px;
    background-color: #ffffff;   
`