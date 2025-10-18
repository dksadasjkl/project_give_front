import { css } from "@emotion/react";

export const boardCard = css`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  width: 280px;
  padding-bottom: 15px;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  font-family: "Pretendard";
  transition: all 0.3s;
  cursor: pointer;

  &:hover{
    transform: translate(0, -5px);
    border: 1px solid rgba(0, 0, 0, 0.55)
  }
`;
export const imageBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    & > img {
        width: 100%;
        height: 200px;
    }
    
`

export const contentBox = css`
    padding: 10px 20px 0;
`


export const title = css`
    font-weight: 500;
    font-size: 18px;
    white-space: nowrap;       /* 한 줄로 제한 */
    overflow: hidden;          /* 넘치는 부분 숨김 */
    text-overflow: ellipsis;   /* ... 표시 */
`;

export const organization = css`
    margin: 4px 0 10px; 
    font-size: 16px;
    color: #737373;
`;

export const progressBox = css`
 
`;


export const progressBar = css`
    margin-bottom: 10px;
    height: 3px; // 게이지 두께
    background: #c9c9c9;
    border-radius: 3px;
`;

export const progressFill = (percent) => css`
    width: ${percent}%;
    height: 100%;
    background: #03a94d;
    border-radius: 4px;
    transition: width 0.3s ease;
`;

export const amountBox = css`
    display: flex;
    justify-content: space-between;
    font-size: 18px;

    & > div:nth-child(1) {
        font-weight: 500;
        color: #03a94d;
    }
    
    & > div:nth-child(2) {
        font-weight: 500;
        color: #1c1c1c;
    }
`;

export const metaBox = css`
  display: flex;
  gap: 8px;
  font-size: 12px;
  color: #777;
  margin-bottom: 8px;
`;

export const category = css`
  background-color: #e0f7fa;
  color: #00796b;
  padding: 2px 6px;
  border-radius: 4px;
`;

export const period = css`
  font-style: italic;
`;

export const status = (status) => css`
  font-weight: bold;
  color: ${status === "진행 중" ? "green" : "red"};
`;