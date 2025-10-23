/** @jsxImportSource @emotion/react */
import * as s from './style';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function FundingCard({ title, organization, percent, amount, contentImg, daysLeft, onClick }) {
  return (
    <div onClick={onClick} css={s.card}>
      {/* 이미지 */}
      <div css={s.imageBox}>
        {contentImg && <img src={contentImg} alt={title} />}
      </div>

      <div css={s.contentBox}>
        {/* 타이틀 / 사업체 */}
        <div css={s.titleProgressContainer}>

            <div css={s.title}>{title}</div>

            {/* 달성률 원 */}
            <div css={s.circularProgressWrapper}>
            <CircularProgressbar
                value={percent}
                text={`${percent}%`}
                strokeWidth={3}
                styles={buildStyles({
                    textSize: '30px',
                    pathColor: '#0091ff',
                    textColor: '#0091ff',
                    trailColor: '#e5e5e5',
                })}
            />
            </div>
        </div>
        <div css={s.organization}>{organization}</div>
        

        {/* 맨 아래 메타 */}
        <div css={s.bottomMeta}>
          <span css={s.leftMeta}>{`${daysLeft || 0}일 남음`}</span>
          <span css={s.rightMeta}>{amount?.toLocaleString() || 0}원</span>
        </div>
      </div>
    </div>
  );
}

export default FundingCard;