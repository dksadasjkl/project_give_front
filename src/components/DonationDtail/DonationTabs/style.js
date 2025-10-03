import { css } from "@emotion/react";

export const layout = css;
export const donationTabsWrapper = css`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative; 
`;

export const donationTabs = css`  
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;

  position: sticky;
  top: 80;
  z-index: 50;

  & > div {
    flex-grow: 1;
    text-align: center;
    padding: 5px 0;
    cursor: pointer;
    font-weight: 600;
  }
`;