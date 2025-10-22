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
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const projectImage = css`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  object-fit: cover;
  border: 1px solid #d7e2eb;
  margin-right: 10px;
`;

export const projectTitle = css`
  font-weight: 600;
  font-size: 14px;
  color: #333;
  flex-grow: 1;
`;

export const nickname = css`
  font-weight: 600;
  color: #03a94d;
`;

export const commentFooter = css`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #555;
  margin-top: 8px;
`;

export const date = css`
  color: #999;
  flex-shrink: 0;
`;

export const commentText = css`
  font-size: 16px;
  color: #222;
  white-space: pre-wrap;
  line-height: 1.6;
  flex-grow: 1;
`;

export const actionButtons = css`
  display: flex;
  gap: 6px;

  & > button {
    border: none;
    border-radius: 6px;
    padding: 4px 8px;
    font-size: 12px;
    cursor: pointer;
    transition: 0.2s;
  }
`;

export const editBtn = css`
  background-color: #e6f6eb;
  color: #03a94d;

  &:hover {
    background-color: #d3f3e0;
  }
`;

export const deleteBtn = css`
  background-color: #fde7e7;
  color: #e33;

  &:hover {
    background-color: #fbd3d3;
  }
`;

export const saveBtn = css`
  background-color: #03a94d;
  color: #fff;

  &:hover {
    background-color: #02913e;
  }
`;

export const cancelBtn = css`
  background-color: #f1f1f1;
  color: #333;

  &:hover {
    background-color: #e1e1e1;
  }
`;

export const editTextarea = css`
  width: 100%;
  min-height: 60px;
  padding: 8px;
  margin-right: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  resize: none;
  font-size: 14px;
  color: #222;
  background-color: #fafafa;
`;
