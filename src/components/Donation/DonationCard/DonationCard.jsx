/** @jsxImportSource @emotion/react */
import * as s from './style';


function DonationCard({ 
  title, 
  organization, 
  amount, 
  percent, 
  contentImg, 
  category, 
  period, 
  status,
  onClick 
}) {
  const imgSrc = contentImg || '';
  return (
    <div onClick={onClick} css={s.boardCard}>
      {/* 이미지 */}
      <div css={s.imageBox}>
        {imgSrc && <img src={imgSrc} alt={title} />}
      </div>

      {/* 콘텐츠 */}
      <div css={s.contentBox}>
        {/* 제목 + 기관 */}
        <div>
          <div css={s.title}>{title}</div>
          <div css={s.organization}>{organization}</div>
        </div>

        {/* 카테고리 + 기간 + 상태 */}
        <div css={s.metaBox}>
          {category && <span css={s.category}>{category}</span>}
          {period && <span css={s.period}>{period}</span>}
        </div>
        <div css={s.metaBox}>{status && <span css={s.status(status)}>{status}</span>}</div> 

        {/* 진행률 바 */}
        <div css={s.progressBox}>
          <div css={s.progressBar}>
            <div css={s.progressFill(percent)} />
          </div>
        </div>

        {/* 금액 + 퍼센트 */}
        <div css={s.amountBox}>
          <div>{Math.min(percent, 100)}%</div>
          <div>{amount.toLocaleString()}원</div>
        </div>
      </div>
    </div>
  );
}

export default DonationCard;