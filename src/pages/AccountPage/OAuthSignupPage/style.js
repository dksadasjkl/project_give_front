
import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 0px;
`;

export const container = css`
    width: 600px;
    border: 1px solid #d7e2eb;
    border-radius: 15px;
`;

export const header = css`
    box-sizing: border-box;
    display: flex;
    width: 100%;
    height: 50px;
    font-size: 18px;
    font-weight: 800;
    color: #eeeeee;
    
    & > div {
        width:100%;
        background-color: rgba(0, 128, 49, 0.89);
        text-align: center;
        line-height: 50px;

        box-sizing: border-box;
        border-top-right-radius: 15px;
        border-top-left-radius: 15px;
        cursor: pointer;
        &:hover{
            background-color: rgba(2, 173, 68, 0.89);
        }
    }
`;

export const headerTitle = css`
    font-size: 28px;
`;

export const inputLayout = css`
    margin-top: 15px;
    display: flex;
    padding: 0px 20px;
`;

export const input = css`
    width: 450px;
    & > *:nth-of-type(1) {
        margin-bottom: 5px;
    }
`;

export const logInButton = css`
    margin-left: 10px;
    border: none;
    border-radius: 5px;
    width: 140px;
    font-size: 16px;
    font-weight: 700;
    color: #eeeeee;
    background-color: rgba(0, 128, 49, 0.89);

    &:hover {
        background-color: rgba(2, 173, 68, 0.89);
    }
`

export const signUp = css`
    margin-top: 10px;
    padding-left: 20px;
    font-weight: 600;
    color: #333333;
    cursor: default;

    & > span {
        font-weight: 800;
        color: #212121;
        cursor: pointer;
    }

    & > span:hover {
        border-bottom: 3px solid rgba(2, 173, 68, 0.89);
    }
`;

export const oauth = css`
    margin-top: 20px;
    margin-bottom: 20px;
    padding-left: 20px;
    display: flex;

    &  a {
        margin-right: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        
    }

    &  a  img {
        width: 100%;
        border-radius: 50%;
    }
`;

export const signUpLayout = css`
    margin-top: 15px;
    display: flex;
    padding: 0px 20px;
`;

export const idCheckButton = css`
    margin-left: 5px;
    width: 130px;
    height: 38px;
    border: none;
    border-radius: 5px;
    background-color: #212121;
    font-weight: 700;
    color: #eeeeee;

    &:hover {
        background-color: #121212;
    }
`;

export const signUpLayoutInputList = css`
    margin-top: 5px;
    padding: 0px 20px;

    & * {
        margin-bottom: 2.5px;
    }
`;


export const regiseterButton = css`
    padding: 0px 20px;
    margin-top: 25px;
    margin-bottom: 25px;
    display: flex;
    justify-content: center;
    align-items: center;

    & > button {
        padding: 20px 0px;
        width: 100%;
        background-color: rgba(0, 128, 49, 0.89);
        font-weight: 800;
        font-size: 18px;
        color: #eeeeee;
        border-radius: 5px;
        border: none;
    }

    & > button:hover{
        background-color: rgba(2, 173, 68, 0.89);
    }
`;
