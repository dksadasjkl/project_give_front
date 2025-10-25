import { css } from '@emotion/react';

export const card = css`
  width: 280px;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;

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
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const titleProgressContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const title = css`
  font-weight: 600;
  font-size: 16px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2; // 최대 2줄
  -webkit-box-orient: vertical;

  word-break: keep-all; // 한글 단어가 잘리지 않도록
  overflow-wrap: break-word; // 너무 긴 단어는 강제로 줄바꿈
`;

export const organization = css`
  font-size: 14px;
  color: #777;
`;

export const circularProgressWrapper = css`
  width: 50px;
  height: 50px;
  margin-left: 10px;
  flex-shrink: 0;
`;

export const bottomMeta = css`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-top: auto; // 맨 아래 붙이기
`;

export const leftMeta = css`
  color: #555;
`;

export const rightMeta = css`
  font-weight: 600;
  color: #111;
`;