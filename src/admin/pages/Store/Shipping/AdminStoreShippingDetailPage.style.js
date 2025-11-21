import { css } from "@emotion/react";

export const container = css`
  width: 100%;
  padding: 20px;
`;

export const title = css`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const section = css`
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 30px;
  border: 1px solid #e5e5e5;
`;

export const sectionTitle = css`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
`;

export const infoRow = css`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #f1f1f1;

  span {
    font-weight: 600;
    width: 150px;
    color: #555;
  }

  p {
    flex: 1;
    text-align: right;
  }
`;

export const buttonGroup = css`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const updateBtn = css`
  padding: 10px 16px;
  background: #1976d2;
  color: white;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #0d47a1;
  }
`;

/* =============================
 *   모달
 * ============================= */

export const modalOverlay = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(6px);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 80px;
  animation: fadeIn 0.25s ease;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

export const modalContent = css`
  background: #fff;
  width: 380px;
  padding: 24px;
  border-radius: 12px;
  animation: slideDown 0.28s ease;

  @keyframes slideDown {
    from {
      transform: translateY(-20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const modalTitle = css`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
`;

export const modalSelect = css`
  width: 100%;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
`;

export const modalInput = css`
  width: 100%;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
`;

export const modalButtonWrap = css`
  display: flex;
  justify-content: space-between;
`;

export const modalSaveBtn = css`
  flex: 1;
  padding: 10px;
  background: #1565c0;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background: #0d47a1;
  }
`;

export const modalCancelBtn = css`
  flex: 1;
  padding: 10px;
  background: #9e9e9e;
  color: white;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #757575;
  }
`;
