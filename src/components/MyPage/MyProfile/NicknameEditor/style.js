import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
`;



export const button = css`
    box-sizing: border-box;
    border: 1px solid #0e004a24;
    border-radius: 5px;
    width: 100px;
    padding: 10px 20px;
    margin-right: 5px;
    background-color: white;
    color: #222222;
    font-weight: 600;
    cursor: pointer;

    &:hover {
        color: rgb(255, 64, 129);
        background-color: #dbdbdb29;
    }
`;


export const nicknameEditBox = css`
    display: flex;
    width: 100%;
`;

export const nicknameEdit = css`
    width: 100%;
    color: #333333;
    font-size: 12px;
    font-weight : 600;
`;

export const nickInputEdit = css`
    flex-grow: 1;
    padding: 10px 20px;
    margin-right: 15px;
    border: 2px solid #e6eef5;
    border-radius: 5px;
    width: 80%;
    color: #333333;
    font-size: 12px;
    background-color: #fbfbfd;
`;

export const nickCheckButton = css`
    width: 15%;
    height: 38px;
    margin-left: 10px;
    padding: 10px 20px;
    border: 1px solid #0e004a24;
    border-radius: 5px;
    background-color: white;
    font-weight: 600;
    color: #222222;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        color: rgb(255, 64, 129);
        background-color: #dbdbdb29;
    }
`;


export const profileImg = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #dbdbdb;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    overflow: hidden;
    & > img {
        height: 100%;   
    }  
`;

export const fileEditbutton = css`
    &>* {
        color : #00005cff;
    }
`;

export const passwordEdit = css`
    margin-bottom: 10px;
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