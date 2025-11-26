import React, { useEffect } from 'react'
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useQuery} from '@tanstack/react-query';
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { getDonationProjectDatatilRequest } from '../../../apis/api/Donation/donationDatail';
import { getContributionCountRequest, getContributionLoadMoreRequest } from "../../../apis/api/Donation/donationContribution";
import { getCommentCountRequest, getCommentLoadMoreRequest } from "../../../apis/api/Donation/donationComment";
import { getProjectRewardsRequest } from '../../../apis/api/Funding/fundingDatil';
import FundingBanner from '../../../components/FundingDtail/FundingBanner/FundingBanner';
import FundingTabs from '../../../components/FundingDtail/FundingTabs/FundingTabs';
import FundingIntroduction from '../../../components/FundingDtail/FundingIntroduction/FundingIntroduction';
import FundingPlan from '../../../components/FundingDtail/FundingPlan/FundingPlan';
import FundingComments from '../../../components/FundingDtail/FundingComments/FundingComments';
import FundingHistory from '../../../components/FundingDtail/FundingHistory/FundingHistory';
import FundingReward from '../../../components/FundingDtail/FundingReward/FundingReward';

function  FundingDetail({ principal }) {
  const { donationProjectId } = useParams();

  // 상세페이지 데이터
  const [ fundingDetails, setFundingDetails ] = useState([]); 
  
  // 탭 상태 1: 참여내역(기부내역), 2: 댓글
  const [ tab, setTab ] = useState(1); 

  const [ page, setPage ] = useState(1);
  const countPerPage = 5;  

  // 참여내역
  const [ contributions, setContributions ] = useState([]);
  const [ contributionPage, setContributionPage ] = useState(1);
  const [ contributionTotalCount, setContributionTotalCount ] = useState(0);   // 참여내역 전체 수
  const [ contributionTotalLoadCount, setContributionTotalLoadCount ] = useState(0); // 참여내역 총 페이지
  
  // 댓글
  const [ comments, setComments ] = useState([]);
  const [ commentPage, setCommentPage ] = useState(1);
  const [ commentTotalCount, setCommentTotalCount] = useState(0);   // 댓글 전체 수
  const [ commentTotalLoadCount, setCommentTotalLoadCount] = useState(0); // 댓글 총 페이지

  // 리워드
  const [ rewards , setRewards ] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getDonationProjectDatatilQuery = useQuery(
    ["getDonationProjectDatatilQuery", donationProjectId],
    async () => await getDonationProjectDatatilRequest(donationProjectId),
    {
      retry: 0,
      refetchOnWindowFocus: false,
      onSuccess: response => {
        setFundingDetails(response.data)
      },
      onError: (error) => {
        console.log(error);
      }
    }
  )

   const getContributionsLoadMoreQuery = useQuery(
    ["getContributionsLoadMoreQuery", donationProjectId, contributionPage],
    async () => await getContributionLoadMoreRequest({
          startIndex: (contributionPage - 1) * countPerPage, 
          count: countPerPage,  
          donationProjectId: donationProjectId
        }),
    {
      keepPreviousData: true,
      retry: 0,
      refetchOnWindowFocus: false,
      onSuccess: (response) => {
        if (contributionPage === 1) {
          setContributions(response.data);
        } else {
          setContributions((prev) => [...prev, ...response.data]);
        }
      },
      onError: (err) => console.error(err),
    }
  );

  const getContributionCountRequestQuery = useQuery(
      ["getContributionCountRequestQuery", getContributionsLoadMoreQuery.data], 
      async () => await getContributionCountRequest({
          count: countPerPage,  
          donationProjectId: donationProjectId
      }),
      {
        refetchOnWindowFocus: false,
        onSuccess: (response) => {
          setContributionTotalCount(response.data.totalCount); // totalCount 상태 업데이트
          setContributionTotalLoadCount(response.data.totalLoadCount) // 최대 페이지
        },
        onError: (error) => {
          console.error(error);
        }
      }
    );

     const getCommentLoadMoreQuery = useQuery(
    ["getCommentLoadMoreQuery", donationProjectId, commentPage],
    async () => await getCommentLoadMoreRequest({
          startIndex: (commentPage - 1) * countPerPage, 
          count: countPerPage,  
          donationProjectId: donationProjectId
        }),
    {
      keepPreviousData: true,
      retry: 0,
      refetchOnWindowFocus: false,
      onSuccess: (response) => {
        if (commentPage === 1) {
          setComments(response.data);
        } else {
          setComments((prev) => [...prev, ...response.data]);
        }
      },
      onError: (err) => console.error(err),
    }
  );

  const getCommentCountRequestQuery = useQuery(
      ["getCommentCountRequestQuery", getCommentLoadMoreQuery.data], // 쿼리 key
      async () => await getCommentCountRequest({
          count: countPerPage,  
          donationProjectId: donationProjectId
      }),
      {
        refetchOnWindowFocus: false,
        onSuccess: (response) => {
          setCommentTotalCount(response.data.totalCount); // totalCount 상태 업데이트
          setCommentTotalLoadCount(response.data.totalLoadCount) // 최대 페이지
        },
        onError: (error) => {
          console.error(error);
        }
      }
    );

    // 리워드 불러오기
  const getProjectRewardsRequestQuery = useQuery(
    ["getProjectRewardsRequestQuery", donationProjectId],
    async () => await getProjectRewardsRequest(donationProjectId),
    {
      retry: 0,
      refetchOnWindowFocus: false,
      onSuccess: response => {
        setRewards(response.data)
      },
      onError: (error) => {
        console.log(error);
      }
    }
  )





  return (
    <div css={s.layout}>

        {/* 상단 배너 */}
        <FundingBanner
          imgUrl={fundingDetails[0]?.donationProjectImageUrl}
          endDate={fundingDetails[0]?.donationProjectEndDate}
          title={fundingDetails[0]?.donationProjectTitle}
          currentAmount={fundingDetails[0]?.donationProjectCurrentAmount}
          targetAmount={fundingDetails[0]?.donationProjectTargetAmount}
        />

        {/* 모금소개 및 기부하기 */}
        {/* DonationTabs - 모달은 기부 내역 조회와 함께 진행예정 기본적은 css적용 완료 */}
        <FundingTabs principal={principal} donationProjectId={donationProjectId}/>

        {/* 모금 소개 내용 및 사용계획 */}
        <div>
          {/* 모금 소개 내용 */}
          <FundingIntroduction details={fundingDetails} />

          {/* 리워드 */}
          <FundingReward rewards={rewards} />

          {/* 사용계획 */}
          <FundingPlan 
            startDate={fundingDetails[0]?.donationProjectStartDate}
            endDate={fundingDetails[0]?.donationProjectEndDate}
            amount={fundingDetails[0]?.donationProjectTargetAmount}
            organizationImageUrl={fundingDetails[0]?.donationProjectOrganizationImageUrl}
            organization={fundingDetails[0]?.donationProjectOrganization}
          />
        </div>

        {/* DonationHistory, DonationComments */}
          <div css={s.tapLayout}>
            <div css={s.tapBox}>
              <div css={[s.taps, tab === 1 && s.active]} onClick={() => setTab(1)}>참여내역</div>
              <div css={[s.taps, tab === 2 && s.active]} onClick={() => setTab(2)}>댓글</div>
            </div>
            <div css={s.tabContent}>
              { tab === 1  && (
               <FundingHistory 
                    contributions={contributions}
                    totalCount={contributionTotalCount}
                    onLoadMore={() => setContributionPage(prev => prev + 1)} 
                    hasMore={contributionPage < contributionTotalLoadCount} 
                />
              )}
              {tab === 2 && (
                <FundingComments 
                  comments={comments}
                  totalCount={commentTotalCount}
                  onLoadMore={() => setCommentPage(prev => prev + 1)}
                  hasMore={commentPage < commentTotalLoadCount}
                  contributions={contributions} 
                  principal={principal}
                  donationProjectId={donationProjectId}
                />
              )}
            </div>

        </div>
    </div>
  )
}

export default FundingDetail
