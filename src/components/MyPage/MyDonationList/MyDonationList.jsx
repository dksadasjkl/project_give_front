/** @jsxImportSource @emotion/react */
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { getMyDonationsRequest } from '../../../apis/api/Donation/donation';
import DonationCard from '../../Donation/DonationCard/DonationCard';
import { useNavigate } from 'react-router-dom';
import * as s from './style';
import MyDonationBanner from './MyDonationBanner/MyDonationBanner';

function MyDonationList() {
  const [page, setPage] = useState(1);
  const size = 6;
  const pageBlock = 5;
  const navigate = useNavigate();

const [enabled, setEnabled] = useState(true);

const { data, isLoading } = useQuery({
  queryKey: ['getMyDonationsRequest', page],
  queryFn: () => getMyDonationsRequest(page, size),
  enabled,                  // enabled로 제어
  refetchOnWindowFocus: false,
  refetchOnReconnect: false,
  keepPreviousData: true,
});
  const donations = data?.data?.donations || [];
  const totalCount = data?.data?.totalCount || 0;
  const totalPages = Math.ceil(totalCount / size) || 1; //  최소 1페이지 유지
  const totalAmount = donations.reduce((acc, curr) => acc + (curr.totalContribution || 0), 0);

  //  블록 단위 계산
  const startPage = Math.floor((page - 1) / pageBlock) * pageBlock + 1;
  const endPage = Math.min(startPage + pageBlock - 1, totalPages);

  return (
    <div css={s.container}>
      <div css={s.title}>기부 내역</div>
      <MyDonationBanner totalAmount={totalAmount} projectCount={totalCount} />

      <div css={s.donationCard}>
        {isLoading ? (
          <p>불러오는 중...</p>
        ) : donations.length > 0 ? (
          donations.map((donation) => {
            const percent = Math.floor(
              (donation.donationProjectCurrentAmount / donation.donationProjectTargetAmount) * 100
            );
            const today = new Date();
            const endDate = new Date(donation.donationProjectEndDate);
            const status = endDate >= today ? '진행 중' : '종료';

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
          })
        ) : (
          <p>참여한 기부가 없습니다.</p>
        )}
      </div>

      {/*  블록 단위 페이지네이션 (항상 표시) */}
      <div css={s.pagination}>
        {startPage > 1 && (
          <button onClick={() => setPage(startPage - 1)}>&lt; 이전</button>
        )}

        {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map((num) => (
          <button
            key={num}
            css={[s.pageBtn, page === num && s.pageBtnActive]} // 현재 페이지 항상 활성화 표시
            onClick={() => setPage(num)}
          >
            {num}
          </button>
        ))}

        {endPage < totalPages && (
          <button onClick={() => setPage(endPage + 1)}>다음 &gt;</button>
        )}
      </div>
    </div>
  );
}

export default MyDonationList;
