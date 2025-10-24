import React from "react";
// /** @jsxImportSource @emotion/react */
// import * as s from "./style"; // 필요시 스타일 적용

function FundingReward({ rewards }) {
  if (!rewards || rewards.length === 0) {
    return <div>리워드가 없습니다.</div>;
  }

  return (
    <div>
      {rewards.map((reward) => (
        <div key={reward.fundingProjectRewardId}>
          <h4>{reward.fundingProjectRewardTitle}</h4>
          <p>{reward.fundingProjectRewardDescription}</p>
          <p>
            가격: {reward.fundingProjectRewardPrice.toLocaleString()}원
          </p>
          <p>남은 수량: {reward.fundingProjectRewardRemaining}</p>
          <p>배송 안내: {reward.fundingProjectRewardDeliveryInfo}</p>
          <p>주의 사항: {reward.fundingProjectRewardNotice}</p>
        </div>
      ))}
    </div>
  );
}

export default FundingReward;