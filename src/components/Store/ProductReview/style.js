import { css } from "@emotion/react";

export const container = css`
  margin-top: 60px;
  padding: 24px 20px;
  background: #fafafa;
  border-top: 2px solid #f0f0f0;
  border-radius: 12px;
`;

export const title = css`
  font-size: 22px;
  font-weight: 700;
  color: #222;
  margin-bottom: 24px;
  padding-left: 8px;
  border-left: 4px solid #0078ff;
`;

export const form = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 32px;
  background: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 12px;
  padding: 20px 16px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.04);
`;

export const textarea = css`
  width: 100%;
  min-height: 90px;
  font-size: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 12px;
  line-height: 1.5;
  resize: none;
  background: #fff;
  transition: 0.2s ease;

  &:focus {
    border-color: #0078ff;
    box-shadow: 0 0 0 3px rgba(0, 120, 255, 0.15);
    outline: none;
  }
`;

export const ratingBox = css`
  display: flex;
  justify-content: center;
  gap: 8px;
  font-size: 24px;
`;

export const star = css`
  color: #ddd;
  cursor: pointer;
  transition: 0.15s;
  &:hover {
    color: #ffd700;
    transform: scale(1.2);
  }
`;

export const starActive = css`
  color: #ffd700;
  cursor: pointer;
  transition: 0.15s;
  &:hover {
    transform: scale(1.15);
  }
`;

export const submitBtn = css`
  align-self: flex-end;
  background: #0078ff;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #005fcc;
  }
`;

export const reviewList = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const reviewCard = css`
  background: #fff;
  border: 1px solid #e3e3e3;
  border-radius: 12px;
  padding: 18px 20px;
  transition: 0.25s;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.03);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }
`;

export const reviewHeader = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
`;

export const user = css`
  font-weight: 600;
  color: #222;
  font-size: 15px;
`;

export const date = css`
  color: #999;
  font-size: 13px;
`;

export const stars = css`
  color: #ffd700;
  font-size: 17px;
  margin: 4px 0 8px 0;
`;

export const text = css`
  color: #333;
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 10px;
  white-space: pre-line;
`;

export const actions = css`
  display: flex;
  gap: 12px;
`;

export const actionBtn = css`
  font-size: 14px;
  color: #0078ff;
  background: none;
  border: none;
  cursor: pointer;
  padding: 2px 6px;
  border-radius: 4px;
  transition: 0.15s;

  &:hover {
    background: rgba(0, 120, 255, 0.08);
    color: #005fcc;
  }
`;

export const rateBox = css`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #555;
  margin-top: 10px;
`;

export const starSmall = css`
  color: #ddd;
  cursor: pointer;
  transition: 0.15s;

  &:hover {
    color: #ffd700;
    transform: scale(1.15);
  }
`;

export const noReview = css`
  text-align: center;
  color: #777;
  font-size: 15px;
  background: #fff;
  border: 1px dashed #ddd;
  border-radius: 10px;
  padding: 30px 0;
`;

export const loading = css`
  text-align: center;
  font-size: 16px;
  color: #777;
  margin: 40px 0;
`;

export const loginNotice = css`
  text-align: center;
  background: #f5f9ff;
  border: 1px solid #cde0ff;
  border-radius: 10px;
  padding: 14px;
  font-size: 15px;
  color: #444;
  margin-bottom: 20px;
  line-height: 1.5;
`;

export const editForm = css`
`;