import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
`;


export const buttons = css`
    padding: 10px 15px;
    border-radius: 5px;
    margin-bottom: 2px;
    color: #333333;
    font-weight: 800;
    cursor: pointer;
    &:hover {
        background-color: #fafafa;
        color : #00005cff;
        font-weight: 800;
    }
`;

export const buttons2 = css`
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
        color: rgb(255, 64, 129);
        background-color: #dbdbdb29;
    }
`;

export const buttons3 = css`
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

export const userDetails = css`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    flex-grow: 1;
    height: 100%;
    padding: 0px 80px 80px 40px;
    color: #263747;
    font-weight: 700;
    font-size: 18px;
`;

export const title = css`
    font-size: 25px;
    margin-bottom: 24px;
`;

export const box = css`
    margin: 10px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #d7e2eb;
    border-radius: 15px;
    padding: 40px;
    row-gap: 10px;
    background-color: #ffffff;
`;

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
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 124px;
    height: 124px;
    cursor: pointer;
    position: relative;
    
    & > div:nth-of-type(2) {
        box-sizing: border-box;
        position: absolute;
        bottom: 0; 
        right: 0; 
        font-size: 30px; 
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