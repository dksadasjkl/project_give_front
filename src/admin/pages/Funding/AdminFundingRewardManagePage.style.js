import { css } from "@emotion/react";

/* 페이지 컨테이너 */
export const container = css`
  padding: 20px;
`;

/* 제목 */
export const title = css`
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 20px;
`;

/* 리워드 추가 버튼 */
export const addButton = css`
  padding: 10px 14px;
  background: #1565c0;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    background: #0d47a1;
  }
`;

/* 리스트 영역 */
export const rewardList = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

/* 카드 전체 */
export const card = css`
  display: flex;
  gap: 20px;
  padding: 20px;
  background: white;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 3px 8px rgba(0,0,0,0.05);
`;

/* 이미지 wrapper */
export const imageWrap = css`
  width: 180px;
  height: 180px;
  flex-shrink: 0;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #ddd;
`;

/* 이미지 스타일 */
export const image = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

/* 오른쪽 정보 영역 */
export const infoWrap = css`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

/* 리워드 제목 */
export const rewardTitle = css`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
`;

/* 간단 설명 */
export const rewardDesc = css`
  font-size: 14px;
  color: #555;
  margin-bottom: 12px;
`;

/* 가격 */
export const rewardPrice = css`
  font-size: 16px;
  margin-bottom: 6px;
`;

/* 총 수량 */
export const rewardQuantity = css`
  font-size: 16px;
  margin-bottom: 6px;
`;

/* 남은 수량 */
export const rewardRemain = css`
  font-size: 16px;
  margin-bottom: 14px;
  font-weight: 500;
  color: #d84315;
`;

/* 버튼 그룹 */
export const btnGroup = css`
  display: flex;
  gap: 10px;
  margin-top: auto; /* 카드 아래쪽으로 밀기 */
`;

/* 수정 버튼 */
export const editBtn = css`
  padding: 8px 14px;
  background: #4caf50;
  color: white;
  border-radius: 6px;
  font-size: 14px;

  &:hover {
    background: #388e3c;
  }
`;

/* 삭제 버튼 */
export const deleteBtn = css`
  padding: 8px 14px;
  background: #d32f2f;
  color: white;
  border-radius: 6px;
  font-size: 14px;

  &:hover {
    background: #b71c1c;
  }
`;

/* 모달 배경 */
export const modalOverlay = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

/* 모달 박스 */
export const modal = css`
  width: 450px;
  background: white;
  border-radius: 10px;
  padding: 26px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.2);
`;

/* 라벨 */
export const label = css`
  font-size: 14px;
  margin-bottom: 4px;
  font-weight: 500;
`;

/* 텍스트 input */
export const input = css`
  width: 100%;
  padding: 10px;
  margin-bottom: 14px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
`;

/* textarea */
export const textarea = css`
  width: 100%;
  padding: 10px;
  margin-bottom: 14px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  resize: vertical;
`;

/* 모달 버튼 영역 */
export const modalBtnWrap = css`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

/* 저장 버튼 */
export const saveBtn = css`
  padding: 8px 16px;
  background: #1e88e5;
  color: white;
  border-radius: 6px;

  &:hover {
    background: #1565c0;
  }
`;

/* 취소 버튼 */
export const cancelBtn = css`
  padding: 8px 16px;
  background: #888;
  color: white;
  border-radius: 6px;

  &:hover {
    background: #666;
  }
`;

export const previewImage = css`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 12px;
  border: 1px solid #ddd;
`;