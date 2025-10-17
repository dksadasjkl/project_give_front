import { css } from "@emotion/react";


export const nicknameEditorContainer = css`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 10px;
`;

export const nicknameEditorTitle = css`
    width: 100%;
    color: #333333;
    font-size: 12px;
    font-weight : 600;
`;


export const nicknameEditorInputGroup = css`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const profileActionButton = css`
    box-sizing: border-box;
    border: 1px solid #0e004a24;
    border-radius: 5px;
    padding: 10px 20px;
    margin-right: 8px;
    background-color: white;
    color: #222222;
    font-weight: 600;
    cursor: pointer;

    &:hover {
        color: rgb(255, 64, 129);
        background-color: #dbdbdb29;
    }
`;

export const nicknameCheckButton = css`
    flex-shrink: 0;
    box-sizing: border-box;
    border: 1px solid #0e004a24;
    border-radius: 5px;
    padding: 8px 20px;
    margin-left: 5px;
    background-color: white;
    color: #222222;
    font-weight: 600;
    cursor: pointer;

    &:hover {
        color: rgb(255, 64, 129);
        background-color: #dbdbdb29;
    }
`;
