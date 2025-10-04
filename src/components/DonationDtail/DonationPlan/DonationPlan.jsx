import React from 'react'/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { FaRegCheckCircle } from "react-icons/fa";

function DonationPlan({ startDate, endDate, amount }) {
  return (
        <div css={s.layout}>
            <div css={s.title}>이렇게 진행됩니다</div>

            <div css={s.tableWrapper}>
                <div css={s.rowBox}>
                    <div css={s.label}>모금기간</div>
                    <div css={s.value}>{startDate} ~ {endDate}</div>
                </div>

                <div css={s.rowBox}>
                    <div css={s.label}>목표금액</div>
                    <div css={s.value}>{amount && amount.toLocaleString()}원</div>
                </div>

                <div css={s.rowBox}>
                    <div css={s.label}>기부금 공제</div>
                    <div css={s.value}>일반기부금</div>
                </div>
            </div>

            <div css={s.noticeBox}>
                <span css={s.noticeIcon}><FaRegCheckCircle /></span>
                <div css={s.noticeTitle}>목표금액 미달 시</div>
            </div>
            <div css={s.noticeDesc}>
                사업계획을 조정해 모금액 규모에 맞게 사업을 진행하겠습니다.
            </div>
        </div>
)
}

export default DonationPlan