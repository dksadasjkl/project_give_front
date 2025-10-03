/** @jsxImportSource @emotion/react */
import * as s from "./style";


function DonationTabs() {

  return (
        <div css={s.donationTabs}>
            <div css={s.tabIntro}>모금소개</div>
            <div css={s.tabDonate}>기부하기</div>
        </div>
  )
}

export default DonationTabs