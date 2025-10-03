import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    justify-content: center;
    background-color: white;
`;

export const header = css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    background: white;
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;

      & div {
        margin: 30px; //임시
        text-decoration: none;
        color: black;
        font-weight: 600;
        transition: all 0.3s;
        cursor: pointer;

        &:hover {
            color: rgba(138, 248, 65, 1);
        }
    }

    & a {
        margin: 30px; //임시
        text-decoration: none;
        color: black;
        font-weight: 600;
        transition: all 0.3s;
        cursor: pointer;

        &:hover {
            color: rgba(138, 248, 65, 1);
        }
    }
`;

export const link = css`
    text-decoration: none;  
    color: #333333;            
    font-weight: bold;     
    padding: 8px 16px;      
    transition: all 0.3s ease;
`;

export const loginBox = css`
`;

export const accountItems = css`
`;

export const login = css`
 text-decoration: none;  
    color: #333333;            
    font-weight: bold;     
    padding: 8px 16px;      
    transition: all 0.3s ease;
`;
