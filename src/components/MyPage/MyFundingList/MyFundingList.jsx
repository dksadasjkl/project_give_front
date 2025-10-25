import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import { getMyDonationsRequest } from '../../../apis/api/Donation/donation';
import DonationCard from '../../Donation/DonationCard/DonationCard';
import { useNavigate } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import * as s from "./style"
import MyDonationBanner from '../MyDonationList/MyDonationBanner/MyDonationBanner';
import FundingCard from '../../Funding/FundingCard/FundingCard';
import { getMyFundingsRequest } from '../../../apis/api/Funding/funding';

function MyFundingList() {
  const [fundingList, setFundingList] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();

  const getMyDonationsRequestQuery = useQuery(
    ["getMyDonationsRequestQuery"],
    getMyFundingsRequest,
    {
      retry: 0,
      refetchOnWindowFocus: false,
      onSuccess: response => {
        const data = response.data || [];
        setFundingList(data);

        // 총 참여금액 계산
        const sum = data.reduce((acc, curr) => acc + (curr.totalContribution || 0), 0);
        setTotalAmount(sum);
      }
    }
  );

  return (
    <div css={s.container}>
      <div css={s.title}>참여한 펀딩</div>
      {/* 상단 배너/총 참여 금액 */}
      <MyDonationBanner totalAmount={totalAmount} projectCount={fundingList.length} />

      {/* 기부 프로젝트 카드 리스트 */}
      <div css={s.donationCard}>
        {fundingList.map((funding) => {
            const percent = Math.floor(
              (funding.donationProjectCurrentAmount / funding.donationProjectTargetAmount) * 100
            );

            // 남은 일수 계산
            const endDate = new Date(funding.donationProjectEndDate);
            const today = new Date();
            const daysLeft = Math.max(Math.ceil((endDate - today) / (1000 * 60 * 60 * 24)), 0);

            return (
              <FundingCard
                key={funding.donationProjectId}
                title={funding.donationProjectTitle}
                organization={funding.donationProjectOrganization}
                contentImg={funding.donationProjectImageUrl}
                percent={percent}
                daysLeft={daysLeft}
                amount={funding.donationProjectCurrentAmount}
                onClick={() => navigate(`/funding/${funding.donationProjectId}`)}
              />
            );
          })}
      </div>
    </div>
  );
}

export default MyFundingList;