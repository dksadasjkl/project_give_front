/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useQuery} from '@tanstack/react-query';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getDonationProjectDatatilRequest } from '../../../apis/api/Donation/donationDatail';
import DonationBanner from "../../../components/DonationDtail/DonationBanner/DonationBanner";
import DonationTabs from "../../../components/DonationDtail/DonationTabs/DonationTabs";
import DonationIntroduction from "../../../components/DonationDtail/DonationIntroduction/DonationIntroduction";
import DonationPlan from "../../../components/DonationDtail/DonationPlan/DonationPlan";
import DonationHistory from "../../../components/DonationDtail/DonationHistory/DonationHistory";
import DonationComments from "../../../components/DonationDtail/DonationComments/DonationComments";
import { getContributionCountRequest, getContributionLoadMoreRequest } from "../../../apis/api/Donation/donationContribution";
import { getCommentCountRequest, getCommentLoadMoreRequest } from "../../../apis/api/Donation/donationComment";

function DonationDetail({ principal }) {
  const { donationProjectId } = useParams();

  // 상세페이지 데이터
  const [ donationDetails, setDonationDetails ] = useState([]); 
  
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
        setDonationDetails(response.data)
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
        <DonationTabs principal={principal} donationProjectId={donationProjectId}/>

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
              { tab === 1  && (
               <DonationHistory 
                    contributions={contributions}
                    totalCount={contributionTotalCount}
                    onLoadMore={() => setContributionPage(prev => prev + 1)} 
                    hasMore={contributionPage < contributionTotalLoadCount} 
                />
              )}
              {tab === 2 && (
                <DonationComments 
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

export default DonationDetail