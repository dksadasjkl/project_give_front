import React, { useEffect, useState } from 'react'
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useQuery } from '@tanstack/react-query';
import { getDonationProjectsRequest } from '../../../apis/api/Donation/donation';

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

return (
    <div>
      <div css={s.font}>DonationPage</div>
      <div>
        {
            donationList.map(donation => 
            <div key={donation.donationProjectId}>
              <img src={donation.donationProjectImageUrl} alt={donation.donationProjectTitle} />
              <div>{donation.donationProjectTitle}</div>
              <div>{donation.donationProjectOrganization}</div>
              <div>{donation.donationProjectCurrentAmount}</div>
            </div>)
        }
      </div>
    </div>
  )
}
export default DonationPage