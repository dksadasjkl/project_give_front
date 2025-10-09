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

        {/* DonationActivity 참여내역 및 댓글 임시 css적용 */}
          <div
            style={{
              marginTop: '40px',
              paddingTop: '40px',
              borderTop: '1px solid #e5e5e5',
            }}>
          {/* <div> useState(1); // 1 : 참여내역(기부내역) 2 : 댓글 기본값 1 </div> */}
        </div>
    </div>
  )
}

export default DonationDetail