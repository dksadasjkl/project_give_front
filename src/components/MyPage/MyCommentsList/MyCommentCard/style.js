import { css } from '@emotion/react';

export const commentCard = css`
  border: 1px solid #e3e8ec;
  border-radius: 12px;
  padding: 16px;
  cursor: pointer;
  background: #fff;
  margin-bottom: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.04);
  transition: all 0.2s ease;

  &:hover {
    border-color: #03a94d;
    transform: translateY(-2px);
  }
`;

export const projectInfo = css`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const projectImage = css`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  object-fit: cover;
  border: 1px solid #e3e8ec;
  margin-right: 10px;
  background-color: #fafafa;
`;

export const projectTitle = css`
  font-weight: 600;
  font-size: 15px;
  color: #222;
  flex-grow: 1;
`;

export const actionButtons = css`
  display: flex;
  gap: 6px;

  button {
    border: 1px solid #ccd4dd;
    border-radius: 6px;
    padding: 4px 8px;
    font-size: 12px;
    cursor: pointer;
    background: #fff;
    color: #222;
    transition: background 0.2s ease;

    &:hover {
      background: #f4f4f4;
    }
  }
`;

export const editBtn = css`
  color: #03a94d;
  border-color: #03a94d99;

  &:hover {
    background-color: #e9f6f0;
  }
`;

export const deleteBtn = css`
  color: #d32525;
  border-color: #d3252533;

  &:hover {
    background-color: #fde9e9;
  }
`;

export const saveBtn = css`
  background-color: #03a94d;
  color: #fff;
  border: none;

  &:hover {
    background-color: #02913e;
  }
`;

export const cancelBtn = css`
  background-color: #f4f4f4;
  border-color: #ccc;

  &:hover {
    background-color: #e9e9e9;
  }
`;

export const nickname = css`
  font-weight: 600;
  color: #03a94d;
  margin-bottom: 6px;
  display: inline-block;
`;

export const commentFooter = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 14px;
  color: #555;
  margin-top: 6px;
`;

export const commentText = css`
  font-size: 15px;
  color: #222;
  white-space: pre-wrap;
  line-height: 1.6;
  flex-grow: 1;
`;

export const date = css`
  color: #999;
  font-size: 12px;
  flex-shrink: 0;
  margin-left: 10px;
`;

export const editTextarea = css`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #e3e8ec;
  resize: none;
  font-size: 14px;
  color: #222;
  background-color: #fbfbfd;
  min-height: 70px;
`;
