import { css } from "@emotion/react";

export const container = css`
  margin-top: 60px;
  padding: 20px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

export const title = css`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 15px;
`;

export const form = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 25px;
`;

export const input = css`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 15px;
`;

export const textarea = css`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  height: 80px;
  resize: none;
  font-size: 15px;
`;

export const formBottom = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const submitBtn = css`
  padding: 6px 14px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    background: #0069d9;
  }
`;

export const loginNotice = css`
  text-align: center;
  padding: 15px;
  background: #f9f9f9;
  color: #666;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const qnaList = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const qnaCard = css`
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 15px;
  background: #fafafa;
`;

export const qnaHeader = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

export const qnaTitle = css`
  font-weight: 600;
  font-size: 15px;
`;

export const qnaContent = css`
  font-size: 14px;
  color: #555;
  margin-bottom: 10px;
`;

export const answerBox = css`
  background: #f3f8ff;
  border-left: 4px solid #007bff;
  padding: 10px;
  border-radius: 8px;
`;

export const answerLabel = css`
  font-weight: 600;
  color: #007bff;
  margin-bottom: 4px;
`;

export const answerText = css`
  font-size: 14px;
  color: #333;
`;

export const deleteBtn = css`
  background: none;
  border: none;
  color: #d33;
  font-size: 13px;
  cursor: pointer;
`;

export const noQna = css`
  text-align: center;
  color: #888;
  padding: 20px;
`;
