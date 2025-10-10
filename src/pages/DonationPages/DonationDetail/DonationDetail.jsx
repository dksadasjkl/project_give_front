/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { getDonationProjectDatatilRequest } from '../../../apis/api/Donation/donationDatail';
import DonationBanner from "../../../components/DonationDtail/DonationBanner/DonationBanner";
import DonationTabs from "../../../components/DonationDtail/DonationTabs/DonationTabs";
import DonationIntroduction from "../../../components/DonationDtail/DonationIntroduction/DonationIntroduction";
import DonationPlan from "../../../components/DonationDtail/DonationPlan/DonationPlan";
import DonationHistory from "../../../components/DonationDtail/DonationHistory/DonationHistory";
import DonationComments from "../../../components/DonationDtail/DonationComments/DonationComments";
import { getContributionCountRequest, getContributionLoadMoreRequest } from "../../../apis/api/Donation/donationContribution";

function DonationDetail() {
  const { donationProjectId } = useParams();

  // 상세페이지 데이터
  const [ donationDetails, setDonationDetails ] = useState([]); 
  
  // 참여내역
  const [ contributions, setContributions ] = useState([]);
  const [ page, setPage ] = useState(1);
  const countPerPage = 2; // 임시 2 -> 10
  const [ totalCount, setTotalCount ] = useState(0); // 전체 데이터 수 (예: 21개)
  const [ totalLoadCount, setTotalLoadCount ] = useState(0); // 총 페이지 수 (예: 3페이지)

  // 탭 상태 1: 참여내역(기부내역), 2: 댓글
  const [ tab, setTab ] = useState(1); 

  const getDonationProjectDatatilQuery = useQuery(
    ["getDonationProjectDatatilQuery", donationProjectId],
    async () => await getDonationProjectDatatilRequest(donationProjectId),
    {
      retry: 0,
      refetchOnWindowFocus: false,
      onSuccess: response => {
        setDonationDetails(response.data)
      },
      onError: (error) => {
        console.log(error);
      }
    }
  )

   const contributionsLoadMoreQuery = useQuery(
    ["contributionsLoadMoreQuery", donationProjectId, page],
    async () => await getContributionLoadMoreRequest({
          startIndex: (page - 1) * countPerPage, 
          count: countPerPage,  
          donationProjectId: donationProjectId
        }),
    {
      keepPreviousData: true,
      retry: 0,
      refetchOnWindowFocus: false,
      onSuccess: (response) => {
        if (page === 1) {
          setContributions(response.data);
        } else {
          setContributions((prev) => [...prev, ...response.data]);
        }
      },
      onError: (err) => console.error(err),
    }
  );

  const getContributionCountRequestQuery = useQuery(
      ["getContributionCountRequestQuery", contributionsLoadMoreQuery.data], // 쿼리 key
      async () => await getContributionCountRequest({
          count: countPerPage,  
          donationProjectId: donationProjectId
      }),
      {
        refetchOnWindowFocus: false,
        onSuccess: (response) => {
          setTotalCount(response.data.totalCount); // totalCount 상태 업데이트
          setTotalLoadCount(response.data.totalLoadCount) // 최대 페이지
        },
        onError: (error) => {
          console.error(error);
        }
      }
    );

  return (
    <div css={s.layout}>

        {/* 상단 배너 */}
        <DonationBanner 
          imgUrl={donationDetails[0]?.donationProjectImageUrl} 
          endDate={donationDetails[0]?.donationProjectEndDate} 
          title={donationDetails[0]?.donationProjectTitle}
          currentAmount={donationDetails[0]?.donationProjectCurrentAmount}
          targetAmount={donationDetails[0]?.donationProjectTargetAmount}
        />
        {/* 모금소개 및 기부하기 */}
        {/* DonationTabs - 모달은 기부 내역 조회와 함께 진행예정 기본적은 css적용 완료 */}
        <DonationTabs />

        {/* 모금 소개 내용 및 사용계획 */}
        <div>
          {/* 모금 소개 내용 */}
          <DonationIntroduction details={donationDetails} />

          {/* 사용계획 */}
          <DonationPlan 
            startDate={donationDetails[0]?.donationProjectStartDate}
            endDate={donationDetails[0]?.donationProjectEndDate}
            amount={donationDetails[0]?.donationProjectTargetAmount}
            organizationImageUrl={donationDetails[0]?.donationProjectOrganizationImageUrl}
            organization={donationDetails[0]?.donationProjectOrganization}
          />
        </div>

        {/* DonationHistory, DonationComments */}
          <div css={s.tapLayout}>
            <div css={s.tapBox}>
              <div css={[s.taps, tab === 1 && s.active]} onClick={() => setTab(1)}>참여내역</div>
              <div css={[s.taps, tab === 2 && s.active]} onClick={() => setTab(2)}>댓글</div>
            </div>
            <div css={s.tabContent}>
              { tab === 1 
                ? <DonationHistory 
                    contributions={contributions} 
                    onLoadMore={() => setPage(prev => prev + 1)} 
                    hasMore={page < totalLoadCount} 
                />
                : <DonationComments />
              }
            </div>

        </div>
    </div>
  )
}

export default DonationDetail