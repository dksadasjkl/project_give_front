import { css } from '@emotion/react';

export const layout = css`
  width: 1200px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: 95%;
  }
`;

export const categoryBar = css`
  display: flex;
  gap: 12px;
  margin: 40px auto 30px;
  flex-wrap: wrap;
`;

export const category = (selectedCategory, categoryId) => css`
  padding: 8px 18px;
  border-radius: 8px;
  border: 1px solid ${selectedCategory === categoryId ? '#71a0f8ff' : '#e5e5e5'};
  background-color: ${selectedCategory === categoryId ? '#71a0f8ff' : '#fff'};
  color: ${selectedCategory === categoryId ? '#fff' : '#000'};
  cursor: pointer;
  transition: 0.3s;
`;

export const headerBar = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 15px;
  font-size: 18px;
  
  margin-bottom: 10px;

  & span {
    color: #03a94d;
    margin-left: 5px;
  }
`;



export const fundingCardGrid = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Buttonlayout = css`
  display: flex;
  justify-content: center;
  margin: 30px 0;
`;

export const plusButton = css`
  width: 140px;
  height: 46px;
  border: 1px solid #d9d9d9;
  border-radius: 40px;
  background: #fff;
  cursor: pointer;
  font-size: 16px;
  transition: 0.3s;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const card = css`
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(0, 0, 0, 0.5);
  }
`;

export const imageBox = css`
  & img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;

export const contentBox = css`
  padding: 12px 16px;
`;

export const title = css`
  font-weight: 500;
  font-size: 17px;
  margin-bottom: 6px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const organization = css`
  font-size: 15px;
  color: #777;
  margin-bottom: 10px;
`;

export const progressBar = css`
  height: 4px;
  background: #ddd;
  border-radius: 4px;
  margin-bottom: 8px;
`;

export const progressFill = (percent) => css`
  width: ${percent}%;
  height: 100%;
  background-color: #03a94d;
  transition: width 0.3s ease;
`;

export const metaBox = css`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #555;
  margin-bottom: 6px;
`;

export const amount = css`
  font-weight: 600;
  font-size: 16px;
  color: #111;
`;
