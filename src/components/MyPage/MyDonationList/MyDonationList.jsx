import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import { getMyDonationsRequest } from '../../../apis/api/Donation/donation';
import DonationCard from '../../Donation/DonationCard/DonationCard';
import { useNavigate } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import * as s from "./style"
import MyDonationBanner from './MyDonationBanner/MyDonationBanner';

function MyDonationList() {
  const [donations, setDonations] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();

  const getMyDonationsRequestQuery = useQuery(
    ["getMyDonationsRequestQuery"],
    getMyDonationsRequest,
    {
      retry: 0,
      refetchOnWindowFocus: false,
      onSuccess: response => {
        const data = response.data || [];
        setDonations(data);

        // 총 참여금액 계산
        const sum = data.reduce((acc, curr) => acc + (curr.totalContribution || 0), 0);
        setTotalAmount(sum);
      }
    }
  );

  return (
    <div css={s.container}>
      <div css={s.title}>참여한 기부</div>
      {/* 상단 배너/총 참여 금액 */}
      <MyDonationBanner totalAmount={totalAmount} projectCount={donations.length} />

      {/* 기부 프로젝트 카드 리스트 */}
      <div css={s.donationCard}>
        {donations.map(donation => {
          const percent = Math.floor(
            (donation.donationProjectCurrentAmount / donation.donationProjectTargetAmount) * 100
          );

          // 진행 상태 계산
          const today = new Date();
          const endDate = new Date(donation.donationProjectEndDate);
          const status = endDate >= today ? "진행 중" : "종료";

          return (
            <DonationCard
              key={donation.donationProjectId}
              title={donation.donationProjectTitle}
              organization={donation.donationProjectOrganization}
              contentImg={donation.donationProjectImageUrl}
              amount={donation.donationProjectCurrentAmount}
              percent={percent}
              category={donation.donationCategoryNameKor}
              period={`${donation.donationProjectStartDate} ~ ${donation.donationProjectEndDate}`}
              status={status}
              onClick={() => navigate(`/donation/${donation.donationProjectId}`)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MyDonationList;