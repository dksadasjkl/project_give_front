/** @jsxImportSource @emotion/react */
import * as s from './style';

function DonationCard({ title, organization, amount, percent, contentImg }) {
  const imgSrc = contentImg || '';

  return (
      <div css={s.boardCard}>
        <div css={s.imageBox}>
          {/* 더미 데이터 넣을 예정 */}
          {imgSrc && <img src={contentImg} />} 
        </div>
      <div css={s.contentBox}>
        <div>
          <div css={s.title}>{title}</div>
          <div css={s.organization}>{organization}</div>
        </div>
        <div css={s.progressBox}>
          <div css={s.progressBar}>
            <div css={s.progressFill(percent)} />
          </div>
        </div>
        <div css={s.amountBox}>
          <div>{percent}%</div>
          <div>{amount.toLocaleString()}원</div>
        </div>
      </div>
    </div>
  );
}

export default DonationCard;