import { css } from "@emotion/react";

export const container = css`
  margin-top: 40px;
  padding: 20px;
  border-top: 1px solid #eee;
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
  margin-bottom: 20px;
`;

export const textarea = css`
  width: 100%;
  height: 80px;
  padding: 10px;
  font-size: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  resize: none;
`;

export const ratingBox = css`
  display: flex;
  gap: 5px;
  font-size: 22px;
  cursor: pointer;
`;

export const star = css`
  color: #ccc;
  cursor: pointer;
`;

export const starActive = css`
  color: #ffd700;
  cursor: pointer;
`;

export const submitBtn = css`
  align-self: flex-end;
  background: #0078ff;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 14px;
  cursor: pointer;

  &:hover {
    background: #0062cc;
  }
`;

export const reviewList = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const reviewCard = css`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
`;

export const reviewHeader = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 14px;
  color: #666;
`;

export const stars = css`
  color: #ffd700;
  font-size: 18px;
  margin-bottom: 5px;
`;

export const text = css`
  font-size: 15px;
  color: #333;
  margin-bottom: 10px;
`;

export const actions = css`
  display: flex;
  gap: 10px;
`;

export const actionBtn = css`
  border: none;
  background: none;
  color: #0078ff;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

export const rateBox = css`
  font-size: 14px;
  color: #555;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const starSmall = css`
  color: #ffd700;
  cursor: pointer;
`;

export const noReview = css`
  text-align: center;
  color: #888;
  font-size: 15px;
`;

/** 추가 부분 */

/* 로딩 상태 */
export const loading = css`
  text-align: center;
  font-size: 16px;
  color: #777;
  margin: 40px 0;
`;

/* 로그인 안내 문구 */
export const loginNotice = css`
  text-align: center;
  color: #555;
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  font-size: 15px;
  margin-bottom: 20px;
`;

/* 사용자 닉네임 / ID */
export const user = css`
  font-weight: 600;
  color: #333;
`;

/* 작성 날짜 */
export const date = css`
  color: #999;
  font-size: 13px;
`;
