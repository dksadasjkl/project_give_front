import { css } from "@emotion/react";


export const imgBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 124px;
    height: 124px;
    direction: none;
`;

export const editimgBox = css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

export const userBox = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    font-weight: 600;
    font-size: 17px;
    row-gap: 5px;
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