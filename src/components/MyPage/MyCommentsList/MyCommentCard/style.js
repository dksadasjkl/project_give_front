import { css } from '@emotion/react';

export const commentCard = css`
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  padding: 16px;
  transition: all 0.3s;
  cursor: pointer;
  background: #fff;
  margin-bottom: 12px;

  &:hover {
    border-color: #03a94d;
    transform: translateY(-3px);
  }
`;

export const projectInfo = css`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
`;

export const projectImage = css`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  object-fit: cover;
  border: 1px solid #d7e2eb;
`;

export const projectTitle = css`
  font-weight: 600;
  font-size: 14px;
  color: #333;
`;

export const commentFooter = css`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #555;
`;

export const nickname = css`
  font-weight: 600;
  color: #03a94d;
`;

export const date = css`
  color: #999;
`;

export const commentText = css`
  font-size: 16px;
  color: #222;
  white-space: pre-wrap;
  line-height: 2;
`;
