import { css } from "@emotion/react";

export const container = css`
  margin-top: 60px;
  padding: 28px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
`;

export const title = css`
  font-size: 22px;
  font-weight: 700;
  color: #222;
  margin-bottom: 8px;
  border-left: 4px solid #007bff;
  padding-left: 10px;
`;

export const description = css`
  font-size: 15px;
  color: #555;
  margin-bottom: 25px;
`;

export const form = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 30px;
  background: #f9fbff;
  border: 1px solid #dce7ff;
  border-radius: 12px;
  padding: 16px 18px;
`;

export const input = css`
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 15px;
`;

export const textarea = css`
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  height: 90px;
  resize: none;
  font-size: 15px;
  line-height: 1.6;
`;

export const formBottom = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #555;
`;

export const submitBtn = css`
  padding: 8px 18px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
`;

export const tableWrapper = css`
  margin-top: 20px;
  border-top: 2px solid #007bff;
`;

export const tableHeader = css`
  display: grid;
  grid-template-columns: 100px 1fr 120px 120px;
  padding: 12px 10px;
  font-weight: 700;
  color: #222;
  background: #f1f6ff;
  border-bottom: 1px solid #ccc;
`;

export const tableRow = css`
  display: grid;
  grid-template-columns: 100px 1fr 120px 120px;
  padding: 12px 10px;
  border-bottom: 1px solid #eee;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: #f8faff;
  }
`;

export const answerRow = css`
  display: grid;
  grid-template-columns: 75px 1fr 120px 120px;
  padding: 10px 15px 15px 40px;
  background: #f9fbff;
  border-bottom: 1px solid #e5e5e5;
  color: #333;
  font-size: 14px;
`;

export const answerHighlight = css`
  background: #e8f2ff;
  color: #007bff;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 6px;
`;

export const qnaGroup = css`
  transition: all 0.2s;
`;

export const colStatus = css`
  font-size: 14px;
  font-weight: 600;
`;

export const colTitle = css`
  font-size: 15px;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const colWriter = css`
  font-size: 14px;
  color: #555;
  text-align: center;
`;

export const colDate = css`
  font-size: 14px;
  color: #777;
  text-align: center;
`;

export const answered = css`
  color: #007bff;
  font-weight: 700;
`;

export const waiting = css`
  color: #ff8c00;
  font-weight: 700;
`;

export const noQna = css`
  text-align: center;
  color: #888;
  padding: 25px;
  font-size: 15px;
`;

export const answerTitle = css`
  font-size: 14px;
  color: #333;
  line-height: 1.6;
  word-break: keep-all;
`;

export const detailRow = css`
  display: grid;
  grid-template-columns: 100px 1fr 120px 120px;
  background: #f9fbff;
  padding: 12px 10px;
  font-size: 14px;
  color: #444;
`;

export const detailContent = css`
  border-bottom: 1px solid #cccccc7e;
  padding: 10px 0 10px 10px;
  line-height: 1.6;
  white-space: pre-line;
`;