import { css } from "@emotion/react";

export const item = css`
    box-sizing: border-box;
    display: flex;
    width: 153px; 
    height: 36px;
    align-items: center; 
    justify-content: space-between;
    border: 1px solid #d9d9d9; 
    border-radius: 6px; 
    font-size: 14px; 
    color: #000;
    font-family: "Pretendard"; 
    background-color: #fff; 
    cursor: pointer;

    &:hover {
        border: 1px solid rgba(0, 0, 0, 0.55)
    }
`

export const select = css`
    box-sizing: border-box;
    border: none;
    outline: none;
    width: 151px; 
    height: 30px;
    padding: 0px 5px;
    cursor: pointer;


     & option {
        font-size: 14px;
        font-family: "Pretendard", sans-serif;
        color: #000;
        background-color: #fff;
  }
`