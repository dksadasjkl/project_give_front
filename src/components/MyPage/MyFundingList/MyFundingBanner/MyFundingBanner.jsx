/** @jsxImportSource @emotion/react */
import * as s from './style';

function MyFundingBanner({ totalAmount, projectCount }) {
  return (
    <div css={s.banner}>
        <div>참여 프로젝트 수: {projectCount}개</div>
        <div>총 참여 금액: {totalAmount.toLocaleString()}원</div>
    </div>
  )
}

export default MyFundingBanner