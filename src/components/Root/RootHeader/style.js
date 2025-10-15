import { css } from "@emotion/react";

export const headerFull = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;          /* 화면 전체 */
  background: white;
  border-bottom: 1px solid #e5e5e5; /* 밑선 전체 */
  z-index: 100;
`;

export const header = css`
  max-width: 1200px;    /* 중앙 내용 제한 */
  margin: 0 auto;  
  height: 80px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;
  z-index: 100;
  transition: all 0.3s ease;

  @media (max-width: 1024px) {
    height: 70px;
    padding: 0 20px;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    padding: 10px 20px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    padding: 8px 10px;
  }
`;

export const logoBox = css`
  width: 90px;
`;

export const logoimage = css`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const centerMenu = css`
  display: flex;
  justify-content: center;
  gap: 50px;

  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (max-width: 480px) {
    flex-wrap: wrap;
    gap: 12px;
  }
`;

export const rightBox = css`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
    margin-top: 6px;
  }
`;

export const link = css`
  text-decoration: none;
  color: #333333;
  font-weight: bold;
  padding: 8px 16px;
  transition: all 0.3s ease;

  &:hover {
    color: rgba(138, 248, 65, 1);
  }

  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 4px 8px;
    font-size: 0.85rem;
  }
`;

export const login = css`
  text-decoration: none;
  color: #333333;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    color: rgba(138, 248, 65, 1);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;