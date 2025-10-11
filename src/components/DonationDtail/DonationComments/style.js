import { css } from "@emotion/react";

export const commentLayout = css`
    width: 100%;
    max-width: 1200px;
    margin-top: 20px;
    font-family: "Pretendard, sans-serif";
`;

export const commentContainer = css`
    width: 70%;
    margin-top: 10px;
    padding: 24px 0;
    border-bottom: 1px solid #e5e5e5;
    font-size: 16px;

    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const quillBox = css`
    width: 70%;
    margin: 40px 0 100px;
    position: relative;
`;

export const writebutton = css`
    position: absolute;
    right: 0px;
    bottom: -85px;
    padding: 5px 16px;
    border: 1px solid #d9d9d9;
    border-radius: 10px;
    font-size: 16px;
    color: #000;
    text-align: center;
    font-family: "Pretendard, sans-serif";
    background-color: #fff;
    cursor: pointer;

    &:hover {
        background-color: #f7f7f786;
    }
`;

export const commentHeader = css`
    font-size: 14px;
    font-weight: 500;
    color: #333;

    & > span {
        margin-left: 1px;
        font-weight: 700;
        color: #00ab33;
    }
`;


export const commentAuthorBox = css`
    display: flex;
`;

export const commentNickname = css`
    font-size: 15px;
    font-weight: 700;
    color: #202020;
`;

export const commentUserId = css`
    font-size: 15px;
    font-weight: 700;
    color: #202020;
`;

export const commentContent = css`
    font-size: 15px;
    color: #202020;
`;

export const commentDate = css`
    font-size: 13px;
    color: #828282;
`;

export const button = css`
    width: 70%;
`;