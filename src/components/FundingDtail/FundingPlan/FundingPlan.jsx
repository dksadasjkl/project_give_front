import React from 'react'/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { FaRegCheckCircle } from "react-icons/fa";

function FundingPlan({ startDate, endDate, amount, organizationImageUrl, organization }) {

    const formattedEndDate = new Date(endDate).toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        });
  return (
        <div css={s.layout}>
            <div css={s.title}>이렇게 진행됩니다</div>

            {/* 테이블 + 조직정보 한 줄 2칸 */}
        <div css={s.flexWrapper}>
            {/* 좌측 테이블 */}
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
        </div>


              {/* 결제·배송 안내 */}
            <div css={s.noticeBox}>
                <div css={s.title}>결제 및 배송 안내</div>
            </div>
            <div css={s.noticeDesc}>
                • 리워드는 해당 프로젝트 개설자가 제공합니다.<br/>
                • 100% 달성 시에만 아래 지정일에 결제됩니다.<br/>
                • 결제 및 발송: <span css={s.highlight}>{formattedEndDate}</span>
            </div>
        </div>
)
}

export default FundingPlan