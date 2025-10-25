import { css } from "@emotion/react";

export const commentLayout = css`
    width: 100%;
    max-width: 1200px;
    margin-top: 20px;
    font-family: "Pretendard, sans-serif";
`;

export const commentContainer = css`
    position: relative; 
    width: 70%;
    margin-top: 10px;
    padding: 24px 0;
    border-bottom: 1px solid #e5e5e5;
    font-size: 16px;

    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const quillBox = css`
    width: 70%;
    margin: 40px 0 100px;
    position: relative;
`;

export const writebutton = css`
    position: absolute;
    right: 0px;
    bottom: -85px;
    padding: 5px 16px;
    border: 1px solid #d9d9d9;
    border-radius: 10px;
    font-size: 16px;
    color: #000;
    text-align: center;
    font-family: "Pretendard, sans-serif";
    background-color: #fff;
    cursor: pointer;

    &:hover {
        background-color: #f7f7f786;
    }
`;

export const commentHeader = css`
    font-size: 14px;
    font-weight: 500;
    color: #333;

    & > span {
        margin-left: 1px;
        font-weight: 700;
        color: #71a0f8ff;
    }
`;


export const commentAuthorBox = css`
    display: flex;
`;

export const commentNickname = css`
    font-size: 15px;
    font-weight: 700;
    color: #202020;
`;

export const commentUserId = css`
    font-size: 15px;
    font-weight: 700;
    color: #202020;
`;

export const commentContent = css`
    font-size: 15px;
    color: #202020;
`;

export const commentDate = css`
    font-size: 13px;
    color: #828282;
`;

export const button = css`
    width: 70%;
`;
/* ✅ 댓글 수정/삭제/저장 관련 스타일 — 오른쪽 위 정렬 */
export const commentActions = css`
  position: absolute;
  top: 10px;
  right: 0;
  display: flex;
  gap: 6px;
  z-index: 100;

  & > button {
    padding: 4px 10px;
    font-size: 12.5px;
    border-radius: 6px;
    border: 1px solid #ccc;
    background-color: #fff;
    color: #333;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background-color: #f5f5f5;
      transform: translateY(-1px);
    }
  }
`;

/* ✅ 버튼 개별 스타일 */
export const saveBtn = css`
  color: #00ab33;
  border-color: #00ab33;

  &:hover {
    background-color: rgba(0, 171, 51, 0.12);
  }
`;

export const cancelBtn = css`
  color: #666;
  border-color: #ccc;

  &:hover {
    background-color: #f8f8f8;
  }
`;

export const editBtn = css`
  color: #007bff;
  border-color: #007bff;

  &:hover {
    background-color: rgba(0, 123, 255, 0.12);
  }
`;

export const deleteBtn = css`
  color: #ff4d4f;
  border-color: #ff4d4f;

  &:hover {
    background-color: rgba(255, 77, 79, 0.12);
  }
`;

/* ✅ 댓글 수정 입력창 */
export const editTextarea = css`
  width: 100%;
  min-height: 80px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px 12px;
  font-size: 15px;
  font-family: "Pretendard, sans-serif";
  resize: vertical;
  margin-top: 8px;

  &:focus {
    outline: none;
    border-color: #00ab33;
    box-shadow: 0 0 0 3px rgba(0, 171, 51, 0.15);
  }
`;