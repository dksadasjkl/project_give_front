import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function FundingReward({ rewards }) {
  if (!rewards || rewards.length === 0) {
    return <p css={s.container}>등록된 리워드가 없습니다.</p>;
  }

  return (
    <div css={s.container}>
      {/* 리워드 카드 리스트 */}
      <div css={s.rewardList}>
        {rewards.map((reward) => (
          <div key={reward.fundingProjectRewardId} css={s.rewardCard}>
            <h2>리워드 안내</h2>
            <h4>
              <span css={s.rewardTitle}>{reward.fundingProjectRewardTitle}</span>
            </h4>
            <p css={s.rewardDesc}>{reward.fundingProjectRewardDescription}</p>
            {reward.fundingProjectRewardImageUrl && (
              <img
                src={reward.fundingProjectRewardImageUrl}
                alt={reward.fundingProjectRewardTitle}
                css={s.rewardImage}
              />
            )}
            {reward.fundingProjectRewardDetail && (
              <p css={s.rewardDetail}><b>상세 정보:</b> {reward.fundingProjectRewardDetail}</p>
            )}

            <div css={s.rewardMeta}>
              <p>가격: <b>{reward.fundingProjectRewardPrice.toLocaleString()}원</b></p>
              <p>남은 수량: <b>{reward.fundingProjectRewardRemaining}</b> / {reward.fundingProjectRewardQuantity}</p>
              {reward.fundingProjectRewardDeliveryInfo && (
                <p>배송: {reward.fundingProjectRewardDeliveryInfo}</p>
              )}
              {reward.fundingProjectRewardNotice && (
                <p>유의사항: {reward.fundingProjectRewardNotice}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FundingReward;