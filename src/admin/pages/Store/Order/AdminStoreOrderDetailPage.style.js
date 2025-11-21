import { css, keyframes } from "@emotion/react";

export const container = css`
  width: 100%;
  max-width: 900px;
  margin: 40px auto;
  padding: 20px;
`;

export const title = css`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const section = css`
  margin-bottom: 40px;
  padding: 20px;
  border-radius: 10px;
  background: #fafafa;
  border: 1px solid #eee;
`;

export const sectionTitle = css`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const infoRow = css`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;

  span {
    font-weight: 600;
    color: #333;
  }

  p {
    margin: 0;
    color: #555;
  }
`;

export const table = css`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 12px;
    border-bottom: 1px solid #ddd;
    text-align: center;
  }

  th {
    background: #f3f3f3;
    font-weight: bold;
  }
`;

export const productImg = css`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
`;

export const buttonGroup = css`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const updateBtn = css`
  background: #4caf50;
  color: white;
  padding: 10px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #43a047;
  }
`;

/* ================================
 *  모달 애니메이션
 * ================================ */
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

/* 모달 오버레이 */
export const modalOverlay = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
  backdrop-filter: blur(8px);
  background: rgba(0, 0, 0, 0.4);

  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 12vh;

  animation: ${fadeIn} 0.25s ease-out;
  z-index: 999;
`;

/* 모달 박스 */
export const modalContent = css`
  background: white;
  width: 360px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);

  animation: ${fadeIn} 0.25s ease-out;
`;

export const modalTitle = css`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const modalSelect = css`
  width: 100%;
  padding: 10px;
  font-size: 15px;
  border-radius: 6px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
`;

export const modalButtonWrap = css`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const modalSaveBtn = css`
  background: #4caf50;
  color: white;
  padding: 8px 14px;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #43a047;
  }
`;

export const modalCancelBtn = css`
  background: #9e9e9e;
  color: white;
  padding: 8px 14px;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #757575;
  }
`;
