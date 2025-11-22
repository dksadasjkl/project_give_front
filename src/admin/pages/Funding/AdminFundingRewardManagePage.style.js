import { css } from "@emotion/react";

export const container = css`
  padding: 30px;
`;

export const title = css`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 24px;
`;

export const addButton = css`
  padding: 10px 18px;
  background: #4f46e5;
  color: white;
  border-radius: 8px;
  font-size: 15px;
  cursor: pointer;
  margin-bottom: 24px;

  &:hover {
    background: #4338ca;
  }
`;

export const rewardList = css`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

export const card = css`
  display: flex;
  gap: 20px;
  padding: 20px;
  background: white;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 3px 10px rgba(0,0,0,0.06);
`;

export const imageWrap = css`
  width: 180px;
  height: 180px;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #e5e7eb;
`;

export const image = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const infoWrap = css`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const rewardTitle = css`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
`;

export const rewardDesc = css`
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 12px;
`;

export const rewardPrice = css`
  font-size: 16px;
  margin-bottom: 6px;
`;

export const rewardQuantity = css`
  font-size: 16px;
  margin-bottom: 6px;
`;

export const rewardRemain = css`
  font-size: 16px;
  font-weight: 600;
  color: #d84315;
  margin-bottom: 16px;
`;

export const btnGroup = css`
  display: flex;
  gap: 10px;
  margin-top: auto;
`;

export const editBtn = css`
  padding: 8px 14px;
  background: #3b82f6;
  color: white;
  border-radius: 8px;

  &:hover {
    background: #2563eb;
  }
`;

export const deleteBtn = css`
  padding: 8px 14px;
  background: #ef4444;
  color: white;
  border-radius: 8px;

  &:hover {
    background: #dc2626;
  }
`;

export const modalOverlay = css`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const modal = css`
  width: 460px;
  background: white;
  border-radius: 14px;
  padding: 26px;
  box-shadow: 0 3px 20px rgba(0,0,0,0.2);
`;

export const label = css`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 6px;
`;

export const input = css`
  width: 100%;
  padding: 10px;
  margin-bottom: 14px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 14px;
`;

export const textarea = css`
  width: 100%;
  padding: 10px;
  margin-bottom: 14px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  resize: vertical;
  font-size: 14px;
`;

export const modalBtnWrap = css`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const saveBtn = css`
  padding: 8px 16px;
  background: #4f46e5;
  color: white;
  border-radius: 8px;

  &:hover {
    background: #4338ca;
  }
`;

export const cancelBtn = css`
  padding: 8px 16px;
  background: #9ca3af;
  color: white;
  border-radius: 8px;

  &:hover {
    background: #6b7280;
  }
`;

export const previewImage = css`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  margin-bottom: 14px;
`;
