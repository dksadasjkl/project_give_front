import { css } from "@emotion/react";

/** 전체 컨테이너 */
export const container = css`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;

  h1 {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 25px;
  }

  label {
    display: block;
    font-size: 15px;
    font-weight: 600;
    margin: 18px 0 8px;
  }

  input,
  select,
  textarea {
    width: 100%;
    padding: 12px;
    font-size: 15px;
    border: 1px solid #ccc;
    border-radius: 6px;
    outline: none;
    box-sizing: border-box;
  }

  textarea {
    height: 140px;
    resize: vertical;
  }

  button {
    cursor: pointer;
  }
`;

/** 대표 이미지 & 기관 로고 */
export const previewImg = css`
  width: 260px;
  height: auto;
  border-radius: 10px;
  margin-top: 10px;
  border: 1px solid #eee;
`;

/** 상세 정보 박스 */
export const detailBox = css`
  border: 1px solid #ddd;
  padding: 15px;
  margin: 15px 0;
  border-radius: 8px;
  background: #fafafa;
`;

/** 상세 이미지 */
export const detailPreview = css`
  width: 200px;
  height: auto;
  margin-top: 10px;
  border-radius: 6px;
  border: 1px solid #eee;
`;

/** 리워드 박스 */
export const rewardBox = css`
  border: 1px solid #ccc;
  padding: 15px;
  margin: 15px 0;
  border-radius: 8px;
  background: #f5faff;

  input {
    margin-bottom: 10px;
  }
`;

/** 등록 버튼 */
export const submitBtn = css`
  margin-top: 30px;
  padding: 14px;
  width: 100%;
  background: #1565c0;
  color: white;
  font-size: 18px;
  font-weight: bold;
  border-radius: 8px;
  border: none;

  &:hover {
    background: #0d47a1;
  }
`;
