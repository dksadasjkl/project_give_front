import { css } from "@emotion/react";

export const layout = css`
  display: flex;
  justify-content: center;
  background-color: white;
  width: 100%;
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
  transition: all 0.3s ease;

  & div,
  & a {
    margin: 30px;
    text-decoration: none;
    color: black;
    font-weight: 600;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
      color: rgba(138, 248, 65, 1);
    }
  }

  /* 💻 태블릿 (최대 1024px) */
  @media (max-width: 1024px) {
    height: 70px;

    & div,
    & a {
      margin: 20px;
      font-size: 0.95rem;
    }
  }

  /* 📱 모바일 (최대 768px) */
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: space-around;
    height: auto;
    padding: 10px 0;

    & div,
    & a {
      margin: 12px 10px;
      font-size: 0.9rem;
    }
  }

  /* 📱 작은 모바일 (최대 480px) */
  @media (max-width: 480px) {
    flex-direction: column;
    height: auto;
    padding: 8px 0;

    & div,
    & a {
      margin: 8px 0;
      font-size: 0.85rem;
    }
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

export const loginBox = css`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
    margin-top: 6px;
    gap: 8px;
  }
`;

export const accountItems = css`
  display: flex;
  align-items: center;
`;

export const login = css`
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
