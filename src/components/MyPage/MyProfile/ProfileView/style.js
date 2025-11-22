import { css } from "@emotion/react";

export const editimgBox = css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const imgBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 124px;
    height: 124px;
`;

export const profileImg = css`
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid #e3e8ec;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #fafafa;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const userBox = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    font-weight: 600;
    font-size: 17px;
    row-gap: 5px;
`;

export const button = css`
    border: 1px solid #ccd4dd;
    border-radius: 6px;
    padding: 10px 25px;
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
