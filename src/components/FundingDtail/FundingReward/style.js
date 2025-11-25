import { css } from "@emotion/react";

export const container = css`
  font-family: "Pretendard", sans-serif;
  margin-top: 20px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  line-height: 1.6;
`;

export const rewardList = css`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

export const rewardCard = css`
  flex: 1 1 calc(50% - 24px);
  min-width: 300px;
  background: #fafafa;
  border: 1px solid #e5e5e5;
  border-radius: 12px;
  padding: 16px;
  transition: all 0.25s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    background: #fff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
  }
`;

export const rewardImage = css`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 12px;
`;
export const rewardTitle = css`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 6px;
  display: inline; /* span 그대로 */
  position: relative;
  color: #000;

  /* 물결형 형광펜 대체: background-gradient */
  background-image: linear-gradient(120deg, #a0e7ff 0%, #a0e7ff 100%);
  background-repeat: no-repeat;
  background-size: 100% 0.6em; /* 높이 조절 = 형광펜 두께 */
  background-position: 0 85%; /* 글자 아래쪽에 위치 */
`;

export const rewardDesc = css`
  color: #333; /* 기존 #555보다 진하게 */
  font-size: 15px;
  margin-bottom: 10px;
`;

export const rewardDetail = css`
  font-size: 14px;
  color: #222; /* 기존 #333보다 조금 더 진하게 */
  margin-bottom: 10px;
`;

export const rewardMeta = css`
  font-size: 14px;
  color: #111; /* 정보는 가장 진하게 */
  p + p {
    margin-top: 4px;
  }
`;