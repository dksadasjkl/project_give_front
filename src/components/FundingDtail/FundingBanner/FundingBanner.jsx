/** @jsxImportSource @emotion/react */
import * as s from "./style";

function FundingBanner({ imgUrl, endDate, title, currentAmount, targetAmount }) {
  const today = new Date();
  const endDateObj = new Date(endDate);
  const diffDays = Math.ceil((endDateObj - today) / (1000 * 60 * 60 * 24));
  const percent = Math.floor((currentAmount / targetAmount) * 100) || 0;

  return (
    <div css={s.layout}>
      <div css={s.bannerWrapper(imgUrl)}>
        <div css={s.overlay}>
          <div css={s.bannerDay}>D{diffDays}</div>
          <div css={s.bannertitle}>{title}</div>
          <div css={s.bannerGraphTotalRate}>
            <div>{percent}%</div>
            <div>{currentAmount?.toLocaleString()}원 모금</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FundingBanner;
