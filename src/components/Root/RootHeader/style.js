import { css } from "@emotion/react";

export const headerFull = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
  border-bottom: 1px solid #e5e5e5;
  z-index: 100;
`;

export const header = css`
  max-width: 1200px;
  margin: 0 auto;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;
  transition: all 0.3s ease;
`;

export const logoBox = css`
  display: flex;
  align-items: center;
  height: 130px;        
`;

export const logoimage = css`
  height: 100%;       
  width: auto;         
  object-fit: contain;
  cursor: pointer;
`;

export const centerMenu = css`
  display: flex;
  justify-content: center;
  gap: 50px;
`;

export const rightBox = css`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const link = css`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  padding: 8px 16px;
  transition: all 0.3s ease;
  border-bottom: 2px solid transparent;

  &:hover {
    opacity: 0.8;
  }
`;

/* ✅ 각 메뉴별 활성 스타일 */
export const activeDonation = css`
  color: #8af841;
`;

export const activeFunding = css`
  color: #4fc3f7;
`;

export const activeStore = css`
  color: #ff8a65;
`;

export const activeMap = css`
  color: #64ffda;
`;

export const login = css`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    color: rgba(138, 248, 65, 1);
  }
`;

export const accountItems = css`
  display: flex;
  align-items: center;
  gap: 20px;

  a {
    color: #333;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;

    &:hover {
      color: rgba(138, 248, 65, 1);
    }
  }
`;
