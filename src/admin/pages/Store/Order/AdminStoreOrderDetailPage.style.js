import { css, keyframes } from "@emotion/react";

/* ================================
 *    기본 레이아웃
 * ================================ */
export const container = css`
  width: 100%;
  max-width: 900px;
  margin: 40px auto;
  padding: 24px 30px;
`;

export const title = css`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 30px;
`;

/* ================================
 *    섹션 카드
 * ================================ */
export const section = css`
  margin-bottom: 40px;
  padding: 22px 24px;
  border-radius: 14px;
  background: #fafafa;
  border: 1px solid #e5e7eb;
`;

export const sectionTitle = css`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 18px;
`;

/* ================================
 *    정보 행 UI
 * ================================ */
export const infoRow = css`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid #e5e7eb;

  span {
    font-weight: 600;
    color: #374151;
  }

  p {
    margin: 0;
    color: #4b5563;
  }
`;

/* ================================
 *    테이블 공통
 * ================================ */
export const table = css`
  width: 100%;
  border-collapse: collapse;
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;

  th,
  td {
    padding: 12px 14px;
    border-bottom: 1px solid #e5e7eb;
    text-align: center;
    font-size: 14px;
  }

  th {
    background: #f3f4f6;
    font-weight: 700;
  }
`;

export const productImg = css`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
`;

/* ================================
 *   상단 버튼
 * ================================ */
export const buttonGroup = css`
  display: flex;
  margin-bottom: 20px;
`;

export const updateBtn = css`
  background: #4f46e5;
  color: white;
  padding: 10px 18px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #4338ca;
  }
`;

/* ================================
 *      모달 (Overlay & Box)
 * ================================ */
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-15px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const modalOverlay = css`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(6px);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 12vh;
  animation: ${fadeIn} 0.25s ease-out;
  z-index: 999;
`;

export const modalContent = css`
  width: 360px;
  background: white;
  padding: 24px;
  border-radius: 14px;
  box-shadow: 0 4px 14px rgba(0,0,0,0.15);
  animation: ${fadeIn} 0.25s ease-out;
`;

export const modalTitle = css`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const modalSelect = css`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  margin-bottom: 20px;
  font-size: 15px;
`;

export const modalButtonWrap = css`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const modalSaveBtn = css`
  padding: 8px 14px;
  background: #4f46e5;
  color: #fff;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #4338ca;
  }
`;

export const modalCancelBtn = css`
  padding: 8px 14px;
  background: #9ca3af;
  color: #fff;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #6b7280;
  }
`;
