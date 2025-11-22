import { css } from "@emotion/react";

export const editimgBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 124px;
    height: 124px;
    cursor: pointer;
    position: relative;
`;

export const profileImg = css`
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

export const fileEditbutton = css`
    position: absolute;
    bottom: -4px;
    right: -4px;
    padding: 6px;
    border-radius: 50%;

    svg {
        color: #03a94d;
        font-size: 22px;
    }
`;
