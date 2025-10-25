import React from 'react'/** @jsxImportSource @emotion/react */
import * as s from "./style";

function FundingIntroduction({ details }) {
  return (
    <div>
         {details.map(detail => (
            <div css={s.content}key={detail.donationProjectDetailId}>
              <div css={s.subtitle}>{detail.donationProjectDetailSubtitle}</div>
              <div css={s.text}>
                {detail.donationProjectDetailContent
                    .split('\n')           // 줄바꿈 기준으로 나눔
                    .map((line, idx) => (
                    line.trim() && <p key={idx}>{line}</p>  // 빈 줄은 무시
                    ))}
                </div>
              {detail.donationProjectDetailImageUrl?.trim() && (
                <div css={s.imgBox}>
                    <img
                    src={detail.donationProjectDetailImageUrl}
                    alt={detail.donationProjectDetailSubtitle}
                    />
                </div>
                )}
            </div>
          ))}
    </div>
  )
}

export default FundingIntroduction