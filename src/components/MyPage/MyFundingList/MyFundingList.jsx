/** @jsxImportSource @emotion/react */
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { getMyFundingsRequest } from '../../../apis/api/Funding/funding';
import FundingCard from '../../Funding/FundingCard/FundingCard';
import { useNavigate } from 'react-router-dom';
import * as s from './style';
import MyDonationBanner from '../MyDonationList/MyDonationBanner/MyDonationBanner';

function MyFundingList() {
  const [page, setPage] = useState(1);
  const size = 6;          // ✅ 한 페이지당 6개
  const pageBlock = 5;     // ✅ 5블록 단위 (1~5)
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ['getMyFundingsRequest', page],
    queryFn: () => getMyFundingsRequest(page, size),
    keepPreviousData: true,
    staleTime: 1000 * 60 * 2, // ✅ 2분 캐시 유지
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  // ✅ 데이터 추출
  const fundings = data?.data?.fundings || [];
  const totalCount = data?.data?.totalCount || 0;
  const totalPages = Math.ceil(totalCount / size) || 1;
  const totalAmount = fundings.reduce((acc, curr) => acc + (curr.totalContribution || 0), 0);

  // ✅ 블록 계산
  const startPage = Math.floor((page - 1) / pageBlock) * pageBlock + 1;
  const endPage = Math.min(startPage + pageBlock - 1, totalPages);

  return (
    <div css={s.container}>
      <div css={s.title}>펀딩 내역</div>
      <MyDonationBanner totalAmount={totalAmount} projectCount={totalCount} />

      {/* ✅ 펀딩 카드 리스트 */}
      <div css={s.donationCard}>
        {isLoading ? (
          <p>불러오는 중...</p>
        ) : fundings.length > 0 ? (
          fundings.map((funding) => {
            const percent = Math.floor(
              (funding.donationProjectCurrentAmount / funding.donationProjectTargetAmount) * 100
            );

            const endDate = new Date(funding.donationProjectEndDate);
            const today = new Date();
            const daysLeft = Math.max(
              Math.ceil((endDate - today) / (1000 * 60 * 60 * 24)),
              0
            );

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
          })
        ) : (
          <p>참여한 펀딩이 없습니다.</p>
        )}
      </div>

      {/* ✅ 페이지네이션 */}
      <div css={s.pagination}>
        {startPage > 1 && (
          <button onClick={() => setPage(startPage - 1)}>&lt; 이전</button>
        )}

        {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map((num) => (
          <button
            key={num}
            css={[s.pageBtn, page === num && s.pageBtnActive]}
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

export default MyFundingList;
