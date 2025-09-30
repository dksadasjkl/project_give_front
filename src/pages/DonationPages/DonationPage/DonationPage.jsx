import React, { useEffect, useState } from 'react'
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useQuery } from '@tanstack/react-query';
import { getDonationProjectsRequest } from '../../../apis/api/Donation/donation';
import DonationCard from '../../../components/Donation/DonationCard/DonationCard';
import { BsChevronDown } from "react-icons/bs";

function DonationPage() {
const [ donationList, setDonationList ] = useState([]);

 const getDonationProjectRequestQuery = useQuery(
        ["getDonationProjectRequestQuery"], 
        getDonationProjectsRequest,
        {   retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                 setDonationList(response.data)
            }
        }
    );

  const handleLoadMore = () => {
    
  }

return (
    <div css={s.layout}>
      <div css={s.categoryBar}>
        <div>카테고리 바(리스트 컴포넌트)</div>
        <div>노인</div>
        <div>청소년</div>
      </div>
      <div css={s.headerBar}>
          <div>
            모금함  
            <span> {donationList.length}개</span>
          </div>
          <div>
              <button css={s.buttons}>
                 추천순<BsChevronDown/>
              </button>
          </div>
      </div>
          <div css={s.donationCard}>
            {donationList.map((donation) => {
              const percent = Math.floor(
                (donation.donationProjectCurrentAmount / donation.donationProjectTargetAmount) * 100
              );

              return (
                <DonationCard 
                  key={donation.donationProjectId}
                  title={donation.donationProjectTitle}
                  organization={donation.donationProjectOrganization}
                  contentImg={donation.donationProjectImageUrl}
                  amount={donation.donationProjectCurrentAmount}
                  percent={percent} // 계산된 퍼센트 전달
                />
              );
            })}
          </div>
      <div>
        <button css={s.plusButton} onClick={handleLoadMore}>더보기</button>
      </div>
    </div>
  )
}
export default DonationPage