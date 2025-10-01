import { css } from "@emotion/react";

export const layout = css`
    width: 1200px;
    margin: 0 auto; 
`;

export const categoryBar = css`
    display: flex;
    gap: 16px; /* 카테고리 간격 */
    margin: 50px auto 30px;
    font-family: "Pretendard, sans-serif";
    font-size: 16px;
    color: #000000;

    & > div {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 42px;
        padding: 0 11px;
        border: 1px solid #e5e5e5;
        border-radius: 30px;
        cursor: pointer;    

        &:hover{
            border: 1px solid rgba(0, 0, 0, 0.55)
        }
    }


`;

export const category = (selectedCategory, categoryId) => css`
  border: 1px solid ${selectedCategory === categoryId ? "#03a94d" : "#e5e5e5"};
  background-color: ${selectedCategory === categoryId ? "#03a94d" : "transparent"};
  color: ${selectedCategory === categoryId ? "#fff" : "#000"};

`;

export const headerBar = css`
    display: flex;
    justify-content: space-between; /* 좌우 끝 배치 */
    align-items: center;
    margin-right: 15px;
    font-size: 18px;

    & span {
        font-weight: 500;
        color: #03a94d;
    }
`;

export const donationCard = css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
`;

export const buttons = css`
    box-sizing: border-box;
    width: 153px;
    height: 36px;
    display: flex;
    align-items: center;  
    justify-content: space-between;
    padding: 0px 13px 0px 13px;
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    font-size: 14px;
    color: #000;
    text-align: right;
    font-family: "Pretendard";
    background-color: #fff;
    cursor: pointer;
`;

export const Buttonlayout = css`
    margin: 32px 0;
`;

export const plusButton = css`
    box-sizing: border-box;
    width: 140px;
    height: 46px;
    display: flex;
    align-items: center; 
    justify-content : center;
    margin: 0 auto;
    border: 1px solid #d9d9d9;
    border-radius: 40px;
    font-size: 16px;
    color: #000;
    text-align: center;
    font-family: "Pretendard";
    background-color: #fff;
    cursor: pointer;
`;