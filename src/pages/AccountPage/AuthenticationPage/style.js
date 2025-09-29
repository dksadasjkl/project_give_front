
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

export const header = (authState) => css`
    box-sizing: border-box;
    margin-bottom: 15px;
    display: flex;
    width: 100%;
    height: 50px;
    font-size: 18px;
    font-weight: 800;
    color: #eeeeee;
    
    & > div {
        width: 50%;
        background-color: rgba(0, 128, 49, 0.89);
        text-align: center;
        line-height: 50px;
    }

    & > div:nth-of-type(1) {
        box-sizing: border-box;
        border-top-left-radius: 15px;
        border-right: 1px solid #eeeeee;
        cursor: pointer;
        &:hover{
            background-color: rgba(2, 173, 68, 0.89);
        }
    }

    & > div:nth-of-type(2) {
        box-sizing: border-box;
        border-top-right-radius: 15px;
        cursor: pointer;
        &:hover{
            background-color: rgba(2, 173, 68, 0.89);
        }
    }

    & > div:nth-of-type(${authState}) {
        background-color: rgba(0, 128, 49, 0.89);
    }
`;

export const headerTitle = css`
    font-size: 28px;
`;

export const inputLayout = css`
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
    border-radius: 8px;
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
    padding-left: 20px;
    padding-top: 10px;
    color: #333333;
    cursor: default;

    & > span:nth-child(1),
    & > span:nth-child(3),
    & > span:nth-child(5) {
        margin: 5px;
        font-weight: 600;
        color: #212121;
        cursor: pointer;
    }

    & > span:nth-child(2) {
        margin: 5px;
        color: #212121;
    }   

    & > span:nth-child(4) {
        margin: 5px;
        color: #333333;
    }  

    & > span:nth-child(1):hover,
    & > span:nth-child(3):hover,
    & > span:nth-child(5):hover {
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
    display: flex;
    padding: 0px 20px;
`;

export const idCheckButton = css`
    margin-left: 5px;
    width: 100px;
    height: 38px;
    border: none;
    border-radius: 8px;
    background-color: rgba(0, 128, 49, 0.89);
    font-weight: 700;
    color: #eeeeee;

    &:hover {
        background-color:  rgba(2, 173, 68, 0.89);
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
    margin-top: 10px;
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
        border-radius: 8px;
        border: none;
    }

    & > button:hover{
        background-color: rgba(2, 173, 68, 0.89);
    }
`;
