/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./style";


function DonationTabs() {

  return (
    <div css={s.donationTabsWrapper}>
        <div css={s.donationTabs}>
            <div>모금소개</div>
            <div>기부하기</div>
        </div>
    </div>
  )
}

export default DonationTabs