import { css } from "@emotion/react";

export const layout = css`
    width: 1200px;
    margin: 0 auto;

    /* ✅ 반응형 추가 */
    @media (max-width: 1200px) {
        width: 95%;
    }

    @media (max-width: 768px) {
        width: 90%;
    }
`;

export const categoryBar = css`
    display: flex;
    gap: 16px;
    margin: 40px auto 30px;
    font-family: "Pretendard, sans-serif";
    font-size: 16px;
    color: #000000;
    flex-wrap: wrap; 

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

    @media (max-width: 768px) {
        justify-content: center;
        gap: 10px;
        font-size: 14px;
    }

    @media (max-width: 480px) {
        gap: 8px;
        font-size: 13px;
    }
`;

export const category = (selectedCategory, categoryId) => css`
  border: 1px solid ${selectedCategory === categoryId ? "#03a94d" : "#e5e5e5"};
  background-color: ${selectedCategory === categoryId ? "#03a94d" : "transparent"};
  color: ${selectedCategory === categoryId ? "#fff" : "#000"};
`;

export const headerBar = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 15px;
    font-size: 18px;

    & span {
        font-weight: 500;
        color: #03a94d;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
        font-size: 16px;
        margin-right: 0;
    }

    @media (max-width: 480px) {
        font-size: 14px;
    }
`;

export const donationCard = css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`;

export const buttons = css`
    box-sizing: border-box;
    width: 153px;
    height: 36px;
    display: flex;
    align-items: center;  
    justify-content: space-between;
    padding: 0px 13px;
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    font-size: 14px;
    color: #000;
    text-align: right;
    font-family: "Pretendard";
    background-color: #fff;
    cursor: pointer;

    @media (max-width: 480px) {
        width: 120px;
        font-size: 13px;
        padding: 0 10px;
    }
`;

export const Buttonlayout = css`
    margin: 32px 0;
    display: flex;
    justify-content: center; /* ✅ 가운데 정렬 */

    @media (max-width: 480px) {
        margin: 24px 0;
    }
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

    @media (max-width: 480px) {
        width: 120px;
        height: 40px;
        font-size: 14px;
    }
`;
