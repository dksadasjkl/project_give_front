import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    height: 400px; 
    font-family: "Pretendard", "sans-serif";
    font-size: 18px;
    margin-bottom: 50px;
`;


export const bannerWrapper = (imgUrl) => css`
    position: relative;
    width: 100%;
    height: 100%; 
    background-image: url(${imgUrl});
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px; 
    overflow: visible;
`;

export const overlay = css`
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.4); /* 어두운 오버레이 */
    border-radius: 10px; 
    color: #fff;
    display: flex;
    flex-direction: column;  
    align-items: center;
    justify-content: center;
`;

export const bannerDay = css`
    min-width: 57px;
    height: 33px;
    padding: 0 11px;
    margin: 110px 0 10px; 
    border: 1px solid #03c75a;
    border-radius: 30px;
    color: #03c75a;
    font-weight: 500;
`;

export const bannertitle = css`
    font-weight: 800;
    font-size: 32px;
    font-family: "NanumSquareNeo", "sans-serif";
    color: #fff;
`;
export const bannerGraphTotalRate = css`
    width: 100%; 
    padding: 0 30px;
    margin-top: auto; 
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center; 

    & > div:nth-child(1) {
        font-size: 26px;
        font-weight: 500;
        color:#29cf73;
    }

    & > div:nth-child(1) {

    }
`;

export const progressBox = css`
    width: 100%;
    padding: 0 30px;
`;

export const progressBar = css`
    margin: 10px 0 30px;
    height: 5px; // 게이지 두께
    background: #c9c9c9;
    border-radius: 3px;
`;

export const progressFill = (percent) => css`
    width: ${percent}%;
    height: 100%;
    background: #29cf73;
    border-radius: 4px;
    transition: width 0.3s ease;
`;
