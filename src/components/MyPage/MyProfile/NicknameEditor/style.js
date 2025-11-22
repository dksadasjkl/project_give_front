import { css } from "@emotion/react";

export const nicknameEditorContainer = css`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
`;

export const nicknameEditorTitle = css`
    width: 100%;
    color: #333;
    font-size: 12px;
    font-weight: 600;
`;

export const nicknameEditorInputGroup = css`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const nicknameCheckButton = css`
    flex-shrink: 0;
    height: 38px;
    padding: 8px 20px;
    margin-left: 5px;
    border: 1px solid #ccd4dd;
    border-radius: 6px;
    background-color: white;
    color: #222;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        background-color: #f4f4f4;
        font-weight: 700;
    }
`;

export const profileActionButton = css`
    border: 1px solid #ccd4dd;
    border-radius: 6px;
    padding: 10px 20px;
    margin-right: 8px;
    background-color: white;
    color: #222;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s ease;

    &:hover {
        background-color: #f4f4f4;
        font-weight: 700;
    }
`;
