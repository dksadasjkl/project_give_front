/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { getDonationProjectDatatilRequest } from '../../../apis/api/Donation/donationDatail';
import DonationBanner from "../../../components/DonationDtail/DonationBanner/DonationBanner";
import DonationTabs from "../../../components/DonationDtail/DonationTabs/DonationTabs";

function DonationDetail() {
  const { donationProjectId } = useParams();
  const [ donationDetails, setDonationDetails ] = useState([]);

  const getDonationProjectDatatilQuery = useQuery(
    ["getDonationProjectDatatilQuery", donationProjectId],
    async () => await getDonationProjectDatatilRequest(
      donationProjectId
    ),
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

        {/* 모금소개 및 기부하기(Post요청) */}
        {/* DonationTabs 
              - DonationAction(기부하기) 기부하기 버튼 → 클릭 시 모달
        컴포넌트 분리 예정 */}

        <div > {/* sticky를 감싸는 wrapper */}
          <DonationTabs />
        </div>
        {/* <div>
          <div>모금소개</div>
          <div>기부하기</div> 
        </div> */}

        {/* 모금 소개 내용 및 사용계획 */}
        <div>
          {/* DonationIntroduction 컴포넌트 분리 예정 */}
          {donationDetails.map(detail => (
            <div key={detail.donationProjectDetailId}>
              <h4>{detail.donationProjectDetailSubtitle}</h4>
              <p>{detail.donationProjectDetailContent}</p>
              <img src={detail.donationProjectDetailImageUrl} alt={detail.donationProjectDetailSubtitle} />
            </div>
          ))}

        
          {/* DonationPlan 컴포넌트 분리 예정 */}
          <div>
            <div>이렇게 진행됩니다</div>
            <div>
              <div>모금기간</div>
              <div>{donationDetails[0]?.donationProjectStartDate} ~ {donationDetails[0]?.donationProjectEndDate}</div>
            </div>
            <div>
              <div>목표금액</div>
              <div>{donationDetails[0]?.donationProjectTargetAmount?.toLocaleString()}원</div>
            </div>
            <div>
              <img src={donationDetails[0]?.donationProjectOrganizationImageUrl} alt={donationDetails[0]?.donationProjectOrganizationImageUrl} />
              <div>{donationDetails[0]?.donationProjectOrganization}</div>
            </div>
            <div>
              <span>아이콘</span>
              <div>목표금액 미달 시</div>
              <div>사업계획을 조정해 모금액 규모에 맞게 사업을 진행하겠습니다.</div>
            </div>
          </div>
        </div>

        {/* DonationActivity 참여내역 및 댓글 */}
        <div>
          <div> useState(1); // 1 : 참여내역(기부내역) 2 : 댓글 기본값 1 </div>
        </div>
      
      {/* {donationDetails.map((detail) => (
        <div key={detail.donationProjectDetailId}>

        </div>
      ))} */}
    </div>
  )
}

export default DonationDetail