import { css } from "@emotion/react";

export const container = css`
  margin-top: 60px;
  padding: 28px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
`;

export const title = css`
  font-size: 22px;
  font-weight: 700;
  color: #222;
  margin-bottom: 8px;
  padding-left: 10px;
  border-left: 4px solid #007bff;
`;

export const subtitle = css`
  color: #555;
  margin-bottom: 24px;
  font-size: 15px;
`;

export const loading = css`
  text-align: center;
  color: #777;
  font-size: 15px;
  margin: 20px 0;
`;

export const loginNotice = css`
  background: #f5f9ff;
  border: 1px solid #cde0ff;
  border-radius: 10px;
  padding: 14px;
  text-align: center;
  color: #333;
  font-size: 15px;
  margin-bottom: 20px;
`;

export const statsBox = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8fbff;
  border: 1px solid #dbe8ff;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 40px;
`;

export const statsLeft = css`
  text-align: center;
  width: 30%;
`;

export const avgNum = css`
  font-size: 48px;
  font-weight: 800;
  color: #007bff;
`;

export const stars = css`
  font-size: 20px;
  color: #ffd700;
  margin: 6px 0;
`;

export const total = css`
  font-size: 14px;
  color: #777;
`;

export const statsRight = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const barRow = css`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const barLabel = css`
  width: 40px;
  font-size: 14px;
  text-align: right;
`;

export const barTrack = css`
  flex: 1;
  height: 8px;
  background: #e9eef7;
  border-radius: 4px;
`;

export const barFill = (percent) => css`
  width: ${percent}%;
  height: 100%;
  background: #007bff;
  border-radius: 4px;
  transition: 0.3s;
`;

export const barCount = css`
  width: 30px;
  text-align: right;
  font-size: 13px;
  color: #555;
`;

export const form = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 32px;
  background: #f9fbff;
  border: 1px solid #cde0ff;
  border-radius: 12px;
  padding: 20px 16px;
`;

export const textarea = css`
  width: 100%;
  min-height: 90px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 12px;
  font-size: 15px;
  resize: none;
  line-height: 1.6;
`;

export const ratingBox = css`
  display: flex;
  justify-content: center;
  gap: 6px;
  font-size: 22px;
`;

export const star = css`
  color: #ddd;
  cursor: pointer;
  &:hover {
    color: #ffd700;
  }
`;

export const starActive = css`
  color: #ffd700;
  cursor: pointer;
`;

export const submitBtn = css`
  align-self: flex-end;
  padding: 8px 18px;
  background: #007bff;
  color: #fff;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: 600;
`;

export const reviewHeader = css`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const reviewCount = css`
  font-weight: 600;
  color: #222;
`;

export const sortSelect = css`
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 4px 8px;
`;

export const reviewList = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const reviewCard = css`
  border: 1px solid #e3e3e3;
  border-radius: 10px;
  background: #fff;
  padding: 18px 20px;
`;

export const reviewUserRow = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;


export const userInfo = css`
  display: flex;
  align-items: center;
  gap: 10px;
`;

// export const userImg = css`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   background: #eee;
// `;

export const username = css`
  color: #777;
  font-weight: 600;
  font-size: 14px;
`;


export const starMini = css`
  font-size: 14px;
  color: #ffd700;
`;

export const userMeta = css`
  text-align: right;
`;

export const date = css`
  color: #777;
  font-size: 13px;
  margin-right: 8px;
`;

export const reportBtn = css`
  font-size: 13px;
  color: #ff4040;
  border: none;
  background: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const reportBox = css`
  margin-top: 12px;
  background: #fff3f3;
  border: 1px solid #ffbaba;
  border-radius: 8px;
  padding: 12px;
`;

export const reportActions = css`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
  gap: 10px;
`;


export const actions = css`
  display: flex;
  gap: 10px;
  margin-top: 8px;
`;

export const actionBtn = css`
  font-size: 14px;
  color: #007bff;
  background: none;
  border: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const noReview = css`
  text-align: center;
  color: #888;
  padding: 20px;
`;

export const reviewHeaderRow = css`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 8px;
`;

export const userDetailBox = css`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const starRow = css`
  font-size: 18px;
  color: #ffd700;
  margin-bottom: 4px;
`;

export const infoRow = css`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #555;
`;

export const dot = css`
  color: #aaa;
`;

export const menuName = css`
  font-size: 14px;
  color: #777;
  font-weight: 600;
  margin-bottom: 3px;
`;

export const text = css`
  margin-top: 5px;
  color: #111;
  line-height: 1.6;
  white-space: pre-line;
`;

export const userImg = css`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #eee;
  object-fit: cover;
`;

export const pagination = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  margin-top: 30px;
  flex-wrap: wrap;
`;

export const pageBtn = css`
  border: 1px solid #ccc;
  border-radius: 6px;
  background: #fff;
  color: #333;
  padding: 6px 12px;
  font-size: 14px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background: #f2f7ff;
    border-color: #007bff;
    color: #007bff;
  }
`;

export const pageBtnActive = css`
  background: #007bff;
  color: #fff;
  border-color: #007bff;
  font-weight: 600;
`;

// ✅ 모달 배경
export const modalOverlay = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`;

// ✅ 모달 박스
export const modalBox = css`
  background: #fff;
  padding: 24px;
  border-radius: 12px;
  width: 400px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  text-align: center;

  h3 {
    margin-bottom: 16px;
    font-size: 18px;
    font-weight: 700;
  }
`;

// ✅ 신고 입력창
export const reportInput = css`
  width: 100%;
  min-height: 100px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  resize: none;
  font-size: 14px;
  margin-bottom: 16px;
`;

// ✅ 모달 버튼 영역
export const modalActions = css`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

// ✅ 취소 / 신고 버튼
export const modalCancel = css`
  padding: 8px 14px;
  background: #ddd;
  border-radius: 6px;
  border: none;
  cursor: pointer;
`;

export const modalSubmit = css`
  padding: 8px 14px;
  background: #ff4040;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

