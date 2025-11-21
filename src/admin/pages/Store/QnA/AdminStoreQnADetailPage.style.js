import { css } from "@emotion/react";

export const container = css`
  padding: 30px;
`;

export const title = css`
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 25px;
`;

export const section = css`
  margin-bottom: 30px;
  padding: 20px;
  background: #fafafa;
  border-radius: 10px;
  border: 1px solid #ddd;
`;

export const sectionTitle = css`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const infoRow = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;

  span {
    font-weight: bold;
    width: 150px;
  }
`;

export const infoRowColumn = css`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  span {
    font-weight: bold;
    margin-bottom: 5px;
  }
`;

export const questionContent = css`
  padding: 10px;
  background: #fff;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

export const answerBox = css`
  padding: 10px;
  background: #eef7ff;
  border-radius: 6px;
  border: 1px solid #80bfff;
`;

export const productName = css`
  color: #0066cc;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: #004a99;
  }
`;

export const textarea = css`
  width: 100%;
  height: 120px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #bbb;
  resize: none;
  margin-bottom: 10px;
`;

export const answerBtn = css`
  padding: 10px 18px;
  background: #2b8a3e;
  color: white;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #237032;
  }
`;

export const updateBtn = css`
  padding: 10px 18px;
  background: #0059b3;
  color: white;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #004a99;
  }
`;

export const deleteBtn = css`
  padding: 10px 18px;
  background: #cc0000;
  color: white;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #990000;
  }
`;

export const backBtn = css`
  padding: 10px 18px;
  background: #777;
  color: white;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #555;
  }
`;

export const buttonGroup = css`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;
